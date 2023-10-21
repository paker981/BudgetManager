import { IncomeData } from "../data/types";

export interface IncomeState {
    isLoading: boolean;
    entities: { [id: string]: IncomeData }
    incomes: IncomeData[]
    error: string | null
}