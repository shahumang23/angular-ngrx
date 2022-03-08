import { createAction, props } from '@ngrx/store';
import { Forex } from '../models/forex.model';

export const getItems = createAction('forex get intra day details');
export const getIntraDayDetail = createAction(
  'dashboard get intra day details'
);

export const loadItems = createAction('load items', (forex: Forex) => ({
  forex,
}));

export const errorItem = createAction(
  'error item',
  props<{ message: string }>()
);
