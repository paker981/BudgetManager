import { OutcomeData } from "../data/types";

export interface OutcomeState {
    isLoading: boolean;
    entities: { [id: string]: OutcomeData }
    error: string | null
}