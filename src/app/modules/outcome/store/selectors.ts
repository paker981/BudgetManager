
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/appState.interface";
import { OutcomeState } from "src/app/interfaces/outcomeState.interface";
import { OUTCOME_MODULE_KEY } from "../types/outcome.types";


export const selectFeature = createFeatureSelector<OutcomeState>(OUTCOME_MODULE_KEY);

export const outcomesSelector = createSelector(selectFeature, (state) => Object.keys(state.entities).map((month)=>state.entities[month]));

export const errorSelector = createSelector(selectFeature, (state) => state.error );

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading );