import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Forex } from '../models/forex.model';

import * as fromStore from './reducers';

export const forexSelector = createFeatureSelector<fromStore.ForexState>(
  fromStore.forexFeatureKey
);

export const getForexData = createSelector(
  forexSelector,
  (state: fromStore.ForexState) => state.forex
);

