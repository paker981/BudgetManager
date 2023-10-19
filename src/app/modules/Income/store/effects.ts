import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as IncomesActions from '../store/actions';
import { IncomeDataService } from "../services/income-data.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class IncomeEffects {
    getIncome$ = createEffect(()=>
        this.actions$.pipe(
            ofType(IncomesActions.getIncomes),
            mergeMap(()=>this.incomeService.data$.pipe(
                map((incomes)=>IncomesActions.getIncomesSuccess({incomes})),
                catchError((error)=>of(IncomesActions.getIncomesError({error})))
            ))   
        )
    )

    constructor(
        private actions$: Actions,
        private incomeService: IncomeDataService
        ) {}
}
