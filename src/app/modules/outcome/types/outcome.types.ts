import { FormControl } from "@angular/forms"

export const OUTCOME_MODULE_KEY = 'outcomes';

export type SpendingForm = {
    name: FormControl<string>,
    value: FormControl<number>
}

export interface SpendingData {
    name: string; 
    value: number;
  }

  export interface SingleChartData {
    name: string;
    series: { name: string; value: number }[];
  }

export interface OutcomeToAddData {
  data: SpendingData,
  month: string
}