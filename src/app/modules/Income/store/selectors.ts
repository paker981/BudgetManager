
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/appState.interface";
import { INCOME_MODULE_KEY, IncomeState } from "../types/incomeData.types";

export const selectFeature = createFeatureSelector<IncomeState>(INCOME_MODULE_KEY);

export const incomesSelector = createSelector(selectFeature, (state) => Object.keys(state.entities).map((month)=>state.entities[month]));

export const errorSelector = createSelector(selectFeature, (state) => state.error );

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading );