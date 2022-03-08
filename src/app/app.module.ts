import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ForexListComponent } from './components/forex-list/forex-list.component';
import { ForexDetailComponent } from './components/forex-detail/forex-detail.component';
import { ForexDashboardComponent } from './components/forex-dashboard/forex-dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FxEffect } from './store/FXEffects';
import { forexFeatureKey, reducer } from './store/reducers';
import { DataTablesModule } from 'angular-datatables';
import { HomeComponent } from './container/home/home.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    ForexListComponent,
    ForexDetailComponent,
    ForexDashboardComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(forexFeatureKey, reducer),
    EffectsModule.forRoot([FxEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
