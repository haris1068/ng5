import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RestmocksComponent} from '../restmocks/restmocks.component';

@Component({
  selector: 'app-update-mock',
  templateUrl: './update-mock.component.html',
  styleUrls: ['./update-mock.component.scss']
})
export class UpdateMockComponent implements OnInit {
  myData: any[] = [];
  constructor(public dialogRef: MatDialogRef<RestmocksComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
  update() {
    alert('UPDATED SUCCESSFULLY');
    this.dialogRef.close();
  }

}
