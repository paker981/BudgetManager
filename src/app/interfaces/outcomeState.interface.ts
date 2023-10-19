import { OutcomeData } from "../data/types";

export interface OutcomeState {
    isLoading: boolean;
    outcomes: OutcomeData[]
    error: string | null
}