import { createAction, props, Action } from "@ngrx/store";
import { IncomeData } from "src/app/data/types";

export const GET_INCOMES = '[Incomes] Get Incomes';
export const GET_INCOMES_SUCCESS = '[Incomes] Get Incomes Success';
export const GET_INCOMES_ERROR = '[Incomes] Get Incomes Error';

export class GetIncomes implements Action {
    readonly type = GET_INCOMES;
}

export class GetIncomesSuccess implements Action {
    readonly type = GET_INCOMES_SUCCESS;
    constructor(public payload: IncomeData[]){}
}

export class GetIncomesError implements Action {
    readonly type = GET_INCOMES_ERROR;
    constructor(public payload: any){}
}



export const getIncomes = createAction('[Incomes] Get Incomes');
export const getIncomesSuccess = createAction('[Incomes] Get Incomes Success', props<{ incomes: IncomeData[] }>());
export const getIncomesError = createAction('[Incomes] Get Incomes Error', props<{ error: string }>() );