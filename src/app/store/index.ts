import { Params } from "@angular/router";
import { RouterReducerState } from "@ngrx/router-store";

export interface State {
    router: RouterReducerState<RouterStateUrl>
}

export interface RouterStateUrl {
    url: string,
    queryParams: Params,
    params: Params
}