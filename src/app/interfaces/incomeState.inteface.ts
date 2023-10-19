import { IncomeData } from "../data/types";

export interface IncomeState {
    isLoading: boolean;
    incomes: IncomeData[]
    error: string | null
}