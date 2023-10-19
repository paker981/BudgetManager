
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/appState.interface";
import { OutcomeState } from "src/app/interfaces/outcomeState.interface";

export const selectFeature = (state: AppState) => state.outcomes;

export const outcomesSelector = createSelector(selectFeature, (state) => state.outcomes );

export const errorSelector = createSelector(selectFeature, (state) => state.error );

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading );