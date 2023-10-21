import { IncomeData } from "src/app/data/types";

export const INCOME_MODULE_KEY = 'incomes';

export interface IncomeState {
    isLoading: boolean,
    entities: { [id: string]: IncomeData },
    error: string | null
}

export interface PreviewData {
    name: string;
    series: { name: string; value: number }[];
  }