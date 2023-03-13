import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Questions } from "../../components/interfaces";
import { addQuestionsFail, addQuestionsSuccess, deleteQuestionsFail, deleteQuestionsSuccess, getQuestions, getQuestionsFail, getQuestionsSuccess, getsingleQuestionsId, updateQuestionsFail, updateQuestionsSuccess } from "../Actions/questionsActions";

export interface QuestionsInterface{
questions:Questions[]
questionsId:string
error:string
addSuccess:string
addError:string
updateError:string
deleteSuccess:string
deleteError:string
}

const initialState:QuestionsInterface={
    questions:[],
    questionsId:'',
    error:'',
    addSuccess:'',
    addError:'',
    updateError:'',
    deleteSuccess:'',
    deleteError:'',
}

const questionsSliceState= createFeatureSelector<QuestionsInterface>('Questions')

export const myQuestions= createSelector(questionsSliceState, state=>state.questions)
const myQuestionsId= createSelector(questionsSliceState, state=>state.questionsId)

export const questionsReducer = createReducer<QuestionsInterface>(
    initialState,
    on(getQuestions, (state) => {
      return {
        ...state,
      };
    }),
    on(getQuestionsSuccess, (state, actions): QuestionsInterface => {
      return {
        ...state,
        error: '',
        questions: actions.questions
      };
    }),
    on(getQuestionsFail, (state, actions): QuestionsInterface => {
      return {
        ...state,
        questions: [],
        error: actions.error,
      };
    }),
    on(getsingleQuestionsId, (state, actions): QuestionsInterface => {
      return {
        ...state,
        questionsId: actions.id,
      };
    }),
    on(addQuestionsSuccess, (state, actions): QuestionsInterface => {
      return {
        ...state,
        addError: '',
        addSuccess: actions.message.message,
      };
    }),
    on(addQuestionsFail, (state, actions): QuestionsInterface => {
      return {
        ...state,
        addError: actions.error,
        addSuccess: '',
      };
    }),
    on(updateQuestionsSuccess, (state, action): QuestionsInterface => {
      const updatedQuestions = state.questions.map((item) => {
        return item.Id === action.question.Id ? action.question : item;
      });
  
      return {
        ...state,
        updateError: '',
        questions: updatedQuestions,
      };
    }),
    on(updateQuestionsFail, (state, action): QuestionsInterface => {
      return {
        ...state,
        updateError: action.error,
      };
    }),
    on(deleteQuestionsSuccess, (state, action): QuestionsInterface => {
      return {
        ...state,
        deleteError: '',
        deleteSuccess: action.message.message,
      };
    }),
    on(deleteQuestionsFail, (state, action): QuestionsInterface => {
      return {
        ...state,
        deleteError: action.error,
        deleteSuccess: '',
      };
    })
);
