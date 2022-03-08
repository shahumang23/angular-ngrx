import { Component, Input, OnInit } from '@angular/core';
import { Forex } from 'src/app/models/forex.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ForexDetailComponent } from '../forex-detail/forex-detail.component';

@Component({
  selector: 'app-forex-list',
  templateUrl: './forex-list.component.html',
  styleUrls: ['./forex-list.component.scss']
})
export class ForexListComponent implements OnInit {

  dtOptions: any = {};
  @Input()
  forexResponse!: Forex;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    // Configure the datatable
    this.dtOptions = {
      order : [0, 'asc'],
      searching:false,
      "columnDefs": [ {
        "targets": [1,2,3],
        "orderable": false
      } ]
    };
  }

  /** ForexDetailComponent open with matDialog */
  openModal(data: any) {
    this.matDialog.open(ForexDetailComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": data,
      "autoFocus": false
    });
  }

}
