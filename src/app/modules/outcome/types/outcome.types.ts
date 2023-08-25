import { FormControl } from "@angular/forms"

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