
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/appState.interface";
import { IncomeState } from "../types/incomeData.types";

export const selectFeature = (state: IncomeState) => state;

export const incomesSelector = createSelector(selectFeature, (state) => state.incomes);

export const errorSelector = createSelector(selectFeature, (state) => state.incomes );

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading );