import { Action, createReducer, on } from '@ngrx/store';
import { Forex } from '../models/forex.model';

import * as FxActions from './actions';

export const forexFeatureKey = 'forex';

export interface ForexState {
  forex: Forex[];
}

export const initialState: ForexState = {
  forex: [],
};

export const forexReducer = createReducer(
  initialState,
  on(FxActions.loadItems, (state: ForexState, { forex }) => ({
    ...state,
    forex: [...state.forex, forex],
  }))
);

export function reducer(state: ForexState | undefined, action: Action): any {
  return forexReducer(state, action);
}
