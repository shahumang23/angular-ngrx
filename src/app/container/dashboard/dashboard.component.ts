import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forex } from 'src/app/models/forex.model';
import { getIntraDayDetail } from 'src/app/store/actions';
import { getForexData } from 'src/app/store/fxSelector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  forexResponse$: Observable<Forex[]>;

  constructor(private store: Store<Forex>) {}

  ngOnInit(): void {
    this.store.dispatch(getIntraDayDetail());
    this.forexResponse$ = this.store.pipe(select(getForexData));
  }
}
