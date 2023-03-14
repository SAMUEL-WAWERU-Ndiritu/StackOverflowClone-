import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import  * as answersActions from '../Actions/answersAction'
import { AnswerService } from "src/app/Services/AnswerService";

@Injectable()
export class AnswersEffect{

    constructor(private  AnswerService :AnswerService,private actions$:Actions ){}

    getAnswers=createEffect(()=>{
        return this.actions$.pipe(
            ofType(answersActions.getAnswers),
            mergeMap(()=>{
               return this.AnswerService.getAnswer().pipe(
                    map(answers=> answersActions.getAnswersSuccess({answers:answers}, )
          
                    ),
                    catchError(error=>of(answersActions.getAnswersFail({error:error.message})))
                 
                )
            })
        )
    })

    addAnswers = createEffect(()=>{
    return this.actions$.pipe(
        ofType(answersActions.addAnswers),
        concatMap(action=>{
            return this.AnswerService.addAnswer(action.newanswers).pipe(
                map(successResponse=>{
                    return answersActions.addAnswersSuccess({message:successResponse})
                }),
                catchError(error=>of(answersActions.addAnswersFail({error:error.message})))
            )
        })
    )
    })


   

deleteAnswers= createEffect(()=>{
    return this.actions$.pipe(
        ofType(answersActions.deleteAnswers),
        concatMap(action=>{
           return this.AnswerService.deleteAnswers(action.id).pipe(
                map(successResponse=>{
                    return  answersActions.deleteAnswersSuccess({message:successResponse})
                }),
                catchError(error=>of(answersActions.deleteAnswersFail({error:error.message})))
            )
        })
    )
})

}