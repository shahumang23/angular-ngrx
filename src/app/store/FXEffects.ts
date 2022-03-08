import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getItems, loadItems } from './actions';
import { switchMap, map } from 'rxjs/operators';
import { ForeignExchangeRatesService } from '../services/foreign-exchange-rates.service';
import { Store } from '@ngrx/store';
import { Forex } from '../models/forex.model';

@Injectable()
export class FxEffect {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItems),
      switchMap((action) =>
        this.fxService.getProducts().pipe(map((data) => loadItems(data)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fxService: ForeignExchangeRatesService,
    private store: Store<Forex>
  ) {}
}
