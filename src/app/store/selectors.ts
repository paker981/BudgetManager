import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterStateUrl } from '.';
import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerRedcuer')
 
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl{
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild) {
            state = state.firstChild
        }

        const { params } = state;

        return { url, queryParams, params }
    }
}
