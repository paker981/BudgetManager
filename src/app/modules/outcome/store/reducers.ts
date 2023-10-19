import { createReducer, createReducerFactory, on } from "@ngrx/store";
import * as OutcomesActions from './actions';
import { incomesData } from "src/app/data/income";
import { OutcomeState } from "src/app/interfaces/outcomeState.interface";

export const initialState: OutcomeState = {
    isLoading: false,
    outcomes: [],
    error: null
};

export const reducers = createReducer(initialState, 
    on(OutcomesActions.getOutcomes, (state) => (
        {
        ...state, 
        isLoading: true 
    })),
    on(OutcomesActions.getOutcomesSuccess, (state, action) => (
        { 
        ...state,
        isLoading: false,
        outcomes: action.outcomes.map(outcome => ({ ...outcome }))
    })),
    on(OutcomesActions.getOutcomesError, (state, action) => (
        { 
        ...state, 
        isLoading: false, 
        error: action.error    
    })),
    on(OutcomesActions.addOutcome, (state) => (
        { 
        ...state, 
        isLoading: true
    })),
    on(OutcomesActions.addOutcomeSuccess, (state) => (
        { 
        ...state, 
        isLoading: false   
    })),
    on(OutcomesActions.addOutcomeError, (state, action) => (
        { 
        ...state, 
        isLoading: false, 
        error: action.error    
    }))
    )
