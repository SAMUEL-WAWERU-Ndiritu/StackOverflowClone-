import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import  * as QuestionsActions from '../Actions/questionsActions'
import { QuestionsService } from "src/app/Services/questions.service";

@Injectable()
export class QuestionsEffect{

    constructor(private questionsService:QuestionsService,private actions$:Actions ){}

    loadQuestions=createEffect(()=>{
        return this.actions$.pipe(
            ofType(QuestionsActions.getQuestions),
            mergeMap(()=>{
               return this.questionsService.getUserQuestions().pipe(
                    map(questions=>{
                        return QuestionsActions.getQuestionsSuccess({questions})
                    }),
                    catchError(error=>of(QuestionsActions.getQuestionsFail({error:error.message})))
                )
            })
        )
    })

    addQuestions = createEffect(()=>{
    return this.actions$.pipe(
        ofType(QuestionsActions.addQuestions),
        concatMap(action=>{
            return this.questionsService.addQuestions(action.newquestions).pipe(
                map(successResponse=>{
                    return QuestionsActions.addQuestionsSuccess({message:successResponse})
                }),
                catchError(error=>of(QuestionsActions.addQuestionsFail({error:error.message})))
            )
        })
    )
    })


    updateQuestions= createEffect(()=>{
        return this.actions$.pipe(
            ofType(QuestionsActions.updateQuestions),
            concatMap(action=>{
                return  this.questionsService.updateQuestions(action.id,action.updatedquestions).pipe(
                    map(successresponse=>{
                        return QuestionsActions.updateQuestionsSuccess({question:successresponse})
                    }),
                    catchError(error=>of(QuestionsActions.addQuestionsFail({error:error.message})))
                )
            })
        )
    })

deleteQuestions= createEffect(()=>{
    return this.actions$.pipe(
        ofType(QuestionsActions.deleteQuestions),
        concatMap(action=>{
           return this.questionsService.deleteQuestions(action.id).pipe(
                map(successResponse=>{
                    return  QuestionsActions.deleteQuestionsSuccess({message:successResponse})
                }),
                catchError(error=>of(QuestionsActions.deleteQuestionsFail({error:error.message})))
            )
        })
    )
})

}