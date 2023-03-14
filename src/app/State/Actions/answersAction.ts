import { createAction, props } from "@ngrx/store";
import {  Message, Answers } from "src/app/components/interfaces";


// export const loadQuestions =  createAction(
//     '[Login Page] loadQuestions',
// )
// export const loadQuestions=createAction(
//     '[Login Page] loadQuestions',
//     props<{questions:Questions[]}>()
// )
export const getAnswers = createAction(
    '[Answers]-getAnswers'
)

export const getAnswersSuccess = createAction(
    '[Answers]-getAnswersSuccess', 
    props<{answers:Answers[]}>()
)

export const getAnswersFail= createAction(
    '[Answers]-getAnswersFail',
    props<{error:string}>()
)


export const addAnswers = createAction(
    '[addAnswers]-addAnswers',
    props<{newanswers:Answers}>()
)

export const addAnswersSuccess = createAction(
    '[addAnswers]-addAnswersSuccess', 
    props<{message:Message}>()
)

export const addAnswersFail= createAction(
    '[addAnswers]-addAnswersFail',
    props<{error:string}>()
)




export const deleteAnswers = createAction(
    '[deleteAnswers]-deleteAnswers',
    props<{id:string}>()
)

export const deleteAnswersSuccess = createAction(
    '[deleteAnswers-deleteAnswersSuccess', 
    props<{message:Message}>()
)

export const deleteAnswersFail= createAction(
    '[deleteAnswers]-deleteAnswersFail',
    props<{error:string}>()
)