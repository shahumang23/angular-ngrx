import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-forex-detail',
  templateUrl: './forex-detail.component.html',
  styleUrls: ['./forex-detail.component.scss']
})
export class ForexDetailComponent implements OnInit {

  forexData: any;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.forexData = data;
  }

  ngOnInit(): void {
  }

}
