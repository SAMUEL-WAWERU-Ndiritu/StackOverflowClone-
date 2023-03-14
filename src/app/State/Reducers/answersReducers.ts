import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Answers, Questions } from "../../components/interfaces";
import { addAnswersFail, addAnswersSuccess, deleteAnswersFail, deleteAnswersSuccess, getAnswers, getAnswersFail, getAnswersSuccess } from "../Actions/answersAction";

export interface AnswersInterface{
answers:Answers[]
answersId:string
error:string
addSuccess:string
addError:string
updateError:string
deleteSuccess:string
deleteError:string
}

const initialState:AnswersInterface={
    answers:[],
    answersId:'',
    error:'',
    addSuccess:'',
    addError:'',
    updateError:'',
    deleteSuccess:'',
    deleteError:'',
}

const AnswersSliceState= createFeatureSelector<AnswersInterface>('Answers')

export const myAnswers= createSelector(AnswersSliceState, state=>state.answers)
const myAnswersId= createSelector(AnswersSliceState, state=>state.answersId)

export const AnswersReducer = createReducer<AnswersInterface>(
    initialState,
    on(getAnswers, (state) => {
      return {
        ...state,
      };
    }),
    on(getAnswersSuccess, (state, actions): AnswersInterface => {
      return {
        ...state,
        error: '',
        answers: actions.answers
      };
    }),
    on(getAnswersFail, (state, actions): AnswersInterface => {
      return {
        ...state,
        answers: [],
        error: actions.error,
      };
    }),
  
    on(addAnswersSuccess, (state, actions): AnswersInterface => {
      return {
        ...state,
        addError: '',
        addSuccess: actions.message.message,
      };
    }),
    on(addAnswersFail, (state, actions): AnswersInterface => {
      return {
        ...state,
        addError: actions.error,
        addSuccess: '',
      };
    }),
   
    on(deleteAnswersSuccess, (state, action): AnswersInterface => {
      return {
        ...state,
        deleteError: '',
        deleteSuccess: action.message.message,
      };
    }),
    on(deleteAnswersFail, (state, action): AnswersInterface => {
      return {
        ...state,
        deleteError: action.error,
        deleteSuccess: '',
      };
    })
);
