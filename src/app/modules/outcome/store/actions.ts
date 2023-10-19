import { createAction, props } from "@ngrx/store";
import { OutcomeData } from "src/app/data/types";
import { OutcomeToAddData } from "../types/outcome.types";

export const getOutcomes = createAction('[Outcomes] Get Outcomes');
export const getOutcomesSuccess = createAction('[Outcomes] Get Outcomes Success', props<{ outcomes: OutcomeData[] }>());
export const getOutcomesError = createAction('[Outcomes] Get Outcomes Error', props<{ error: string }>() );

export const addOutcome = createAction('[Outcomes] Add Outcome', props<{ data: OutcomeToAddData }>());
export const addOutcomeSuccess = createAction('[Outcomes] Add Outcome Success');
export const addOutcomeError = createAction('[Outcomes] Add Outcome Error', props<{ error: string }>() );