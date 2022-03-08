import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forex } from 'src/app/models/forex.model';
import { getItems } from 'src/app/store/actions';
import { getForexData } from 'src/app/store/fxSelector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  forexApiResponse$: Observable<Forex[]>;

  constructor(private store: Store<Forex>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getItems());
    this.forexApiResponse$ = this.store.pipe(select(getForexData));
  }
}
