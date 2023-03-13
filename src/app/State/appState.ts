
import { CounterState } from "./Reducers/countReducer";
import { QuestionsInterface } from "./Reducers/questionsReducer";
import { UserInterface } from "./Reducers/user.reducer";
export interface AppState{
    questions:QuestionsInterface,
    counter:CounterState
    users:UserInterface
}