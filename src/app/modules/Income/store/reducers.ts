import { createReducer, createReducerFactory, on } from "@ngrx/store";
import { IncomeState } from "../types/incomeData.types";
import * as IncomesActions from './actions';
import { incomesData } from "src/app/data/income";

export const initialState: IncomeState = {
    isLoading: false,
    incomes: [],
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
        incomes: action.incomes
    })),
    on(IncomesActions.getIncomesError, (state, action) => (
        { 
        ...state, 
        isLoading: false, 
        error: action.error    
    }))
    )
