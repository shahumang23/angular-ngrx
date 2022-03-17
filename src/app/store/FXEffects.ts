import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { dummyAction, getItems, loadItems } from './actions';
import { switchMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';
import { ForeignExchangeRatesService } from '../services/foreign-exchange-rates.service';
import { Store } from '@ngrx/store';
import { Forex } from '../models/forex.model';
import { getForexData } from './fxSelector';
import { of } from 'rxjs';

@Injectable()
export class FxEffect {
  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getItems),
      withLatestFrom(this.store.select(getForexData)),
      mergeMap(([action, data]) =>
        {
          if (!data.length || data.length === 0) {
            return this.fxService.getProducts().pipe(map((data) => loadItems(data)))
          }
          return of(dummyAction());
        })
    );
  });

  constructor(
    private actions$: Actions,
    private fxService: ForeignExchangeRatesService,
    private store: Store<Forex>
  ) {}
}
