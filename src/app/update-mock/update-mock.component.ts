import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RestmocksComponent} from '../restmocks/restmocks.component';
import {HttpClient, HttpClientModule, HttpParams, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update-mock',
  templateUrl: './update-mock.component.html',
  styleUrls: ['../css/stylish-portfolio.css', '../css/bootstrap.css']
})
export class UpdateMockComponent implements OnInit {
  myData = {id: '', headers: [], cases: []};

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<RestmocksComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    const req = {
      data: this.myData
    };
    this.http.put('http://mock-engine-dev.extnp.national.com.au/api/restmock/' + this.myData.id, req)
      .subscribe(
        (data: any) => {
          console.log('DATA IS ' + JSON.stringify(data));
          alert('Mock is updated successfully!!');
          this.dialogRef.close();

        },
        (error: any) => {
          console.log('ERROR IS ' + JSON.stringify(error));
          alert('Mock Already Exist for the mentioned path and verb!!');
        }
      );
  }

  addNewChoice() {
    const obj = {name: '', value: ''};
    this.myData.headers.push(obj);
  }

  onChange(newValue) {
    console.log(newValue);
    this.myData.cases[0].status = newValue;
  }

  removeNewChoice(header) {
    const index = this.myData.headers.indexOf(header);
    this.myData.headers.splice(index, 1);
  }

}
