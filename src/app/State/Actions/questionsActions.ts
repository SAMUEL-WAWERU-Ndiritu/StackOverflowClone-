import { createAction, props } from "@ngrx/store";
import { AddQuestions, Message, Questions } from "src/app/components/interfaces";


// export const loadQuestions =  createAction(
//     '[Login Page] loadQuestions',
// )
// export const loadQuestions=createAction(
//     '[Login Page] loadQuestions',
//     props<{questions:Questions[]}>()
// )
export const getQuestions = createAction(
    '[Questions]-getQuestions'
)

export const getQuestionsSuccess = createAction(
    '[Questions]-getQuestionsSuccess', 
    props<{questions:Questions[]}>()
)

export const getQuestionsFail= createAction(
    '[Questions]-getQuestionsFail',
    props<{error:string}>()
)

export const getsingleQuestionsId= createAction(
    '[Single-Questions]-getSingleQuestionsId',
    props<{id:string}>()
)

export const addQuestions = createAction(
    '[addQuestions]-addQuestions',
    props<{newquestions:AddQuestions}>()
)

export const addQuestionsSuccess = createAction(
    '[addQuestions]-addQuestionsSuccess', 
    props<{message:Message}>()
)

export const addQuestionsFail= createAction(
    '[addQuestions]-addQuestionsFail',
    props<{error:string}>()
)

export const updateQuestions = createAction(
    '[updateQuestions]-updateQuestions',
    props<{updatedquestions:AddQuestions, id:string}>()
)

export const updateQuestionsSuccess = createAction(
    '[updateQuestions]-updateQuestionsSuccess', 
    props<{question:Questions}>()
)

export const updateQuestionsFail= createAction(
    '[updateQuestions]-updateQuestionsFail',
    props<{error:string}>()
)



export const deleteQuestions = createAction(
    '[deleteQuestions]-deleteQuestions',
    props<{id:string}>()
)

export const deleteQuestionsSuccess = createAction(
    '[deleteQuestions-deleteQuestionsSuccess', 
    props<{message:Message}>()
)

export const deleteQuestionsFail= createAction(
    '[deleteQuestions]-deleteQuestionsFail',
    props<{error:string}>()
)