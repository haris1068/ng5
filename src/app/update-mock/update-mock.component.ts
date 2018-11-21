import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RestmocksComponent} from '../restmocks/restmocks.component';

@Component({
  selector: 'app-update-mock',
  templateUrl: './update-mock.component.html',
  styleUrls: ['./css/stylish-portfolio.css', './css/bootstrap.css']
})
export class UpdateMockComponent implements OnInit {
  myData = {};
  constructor(public dialogRef: MatDialogRef<RestmocksComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
  update() {
    alert('UPDATED SUCCESSFULLY' + JSON.stringify(this.myData));
    this.dialogRef.close();
  }

}
