import { IncomeState } from "./incomeState.inteface";
import { OutcomeState } from "./outcomeState.interface";

export interface AppState {
    incomes: IncomeState;
    outcomes: OutcomeState
}