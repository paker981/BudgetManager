import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { State } from ".";
import { getRouterState } from "./selectors";
import { routerReducer } from "@ngrx/router-store";

  export const reducers: ActionReducerMap<State> = {
    router: routerReducer
  };