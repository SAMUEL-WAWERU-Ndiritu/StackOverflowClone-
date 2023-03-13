import { createAction, props } from "@ngrx/store";



export const IncreaseValue= createAction('Increase',props<{increaseBy:number}>())
export const DecreaseValue= createAction('[Decrease', props<{decreaseBy:number}>() )