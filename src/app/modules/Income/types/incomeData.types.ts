import { IncomeData } from "src/app/data/types";


export interface IncomeState {
    isLoading: boolean;
    incomes: IncomeData[],
    error: string | null
}

export interface PreviewData {
    name: string;
    series: { name: string; value: number }[];
  }