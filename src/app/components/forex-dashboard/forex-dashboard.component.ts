import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip
} from "ng-apexcharts";
import * as moment from 'moment';
import { Forex } from 'src/app/models/forex.model';
import { Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-forex-dashboard',
  templateUrl: './forex-dashboard.component.html',
  styleUrls: ['./forex-dashboard.component.scss']
})
export class ForexDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input()
  forexIntraDayResponse!: Observable<Forex[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.forexIntraDayResponse.subscribe((data) => {
      if(data.length !== 0) {
        let timeSeriesValue: any = data[0]['Time Series FX (5min)'];

        function generateData() {
          function randomBar(date, openPosition, highPosition, lowPosition, closePosition) {
            var open = openPosition;
            var close = closePosition;
            return {
              x: date,
              y: [openPosition,highPosition, lowPosition, closePosition]
            };
          }
          var data = [];
          for (let i=0; i < Object.keys(timeSeriesValue).length; i++) {
            data.push(randomBar(Object.keys(timeSeriesValue)[i], Object.values(timeSeriesValue)[i]['1. open'], Object.values(timeSeriesValue)[i]['2. high'], Object.values(timeSeriesValue)[i]['3. low'], Object.values(timeSeriesValue)[i]['4. close']));
          }
          return data;
        }
        
        this.chartOptions = {
          series: [
            {
              name: "candle",
              data: generateData()
            }
          ],
          chart: {
            height: 350,
            type: "candlestick"
          },
          title: {
            text: "EUR To USD FX Intraday (5min)",
            align: "left"
          },
          tooltip: {
            enabled: true
          },
          xaxis: {
            type: "category",
            labels: {
              formatter: function(val) {
                return moment(val).format("MMM DD HH:mm");
              }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        };
       
      }
    });
  }

}
