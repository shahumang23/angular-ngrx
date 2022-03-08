import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forex } from '../models/forex.model';

@Injectable({
  providedIn: 'root',
})
export class ForeignExchangeRatesService {
  forexUrl: string = './config/forex.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Forex> {
    return this.http.get<Forex>(this.forexUrl);
  }
}
