import { createReducer, createReducerFactory, on } from "@ngrx/store";
import { IncomeState } from "../types/incomeData.types";
import * as IncomesActions from './actions';
import { incomesData } from "src/app/data/income";
import { IncomeData } from "../../../data/types";

export const initialState: IncomeState = {
    isLoading: false,
    entities: {},
    error: null
};

export const reducers = createReducer(initialState, 
    on(IncomesActions.getIncomes, (state) => (
        {
        ...state,
        isLoading: true
        })),
    on(IncomesActions.getIncomesSuccess, (state, action) => (
        {
        ...state,
        isLoading: false,
        entities: action.incomes.reduce((entities: { [id: string]: IncomeData }, income)=> ({
                ...entities,
                [Object.keys(income)[0]]: income
                
            }),{
                ...state.entities
            })
    })),
    on(IncomesActions.getIncomesError, (state, action) => (
        { 
        ...state, 
        isLoading: false, 
        error: action.error    
    }))
    )
