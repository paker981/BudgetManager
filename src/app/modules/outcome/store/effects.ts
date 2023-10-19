import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as OutcomesActions from '../store/actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { OutcomeDataService } from "../services/outcome-data.service";

@Injectable()
export class OutcomeEffects {
    getOutcome$ = createEffect(()=>
        this.actions$.pipe(
            ofType(OutcomesActions.getOutcomes),
            mergeMap(()=>this.outcomeService.data$.pipe(
                map((outcomes)=>OutcomesActions.getOutcomesSuccess({outcomes})),
                catchError((error)=>of(OutcomesActions.getOutcomesError({error})))
            ))   
        )
    )

    addOutcome$ = createEffect(()=>
        this.actions$.pipe(
            ofType(OutcomesActions.addOutcome),
            mergeMap((payload)=>this.outcomeService.addToOutcome(payload.data).pipe(
                mergeMap(()=>[
                    OutcomesActions.addOutcomeSuccess(),
                    //OutcomesActions.getOutcomes() automatycznie sie dzieje
                ]),
                catchError((error)=>of(OutcomesActions.addOutcomeError({error})))
            ))   
        )
    )


    constructor(
        private actions$: Actions,
        private outcomeService: OutcomeDataService
        ) {}
}
