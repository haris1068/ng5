import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-createrest',
  templateUrl: './createrest.component.html',
  styleUrls: ['./css/stylish-portfolio.css', './css/bootstrap.css']
})

export class CreaterestComponent implements OnInit {
  headers = [{name: 'Content-Type', value: 'application/json'}];
  cases = [{status: '', payload: ''}];
  reqpath = '';
  verb = '';
  status = '';
  payload = '';
  radioItems = 'GET POST PUT DELETE PATCH'.split(' ');
  model = {options: 'GET'};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onChange(newValue) {
    console.log(newValue);
    this.cases[0].status = newValue;
  }

  addNewChoice() {
    console.log('ADDING A NEW CHOICE' + JSON.stringify(this.headers));
    const obj = {name: '', value: ''};
    this.headers.push(obj);
  }

  ok() {
    const req = {
      data: {
        verb: this.model.options,
        reqpath: this.reqpath,
        headers: this.headers,
        switches: [],
        cases: [{
          'key': 'default',
          'status': this.cases[0].status,
          'payload': this.cases[0].payload

        }]
      }
    };
    this.http.post('http://localhost:3000/api/restmock', req)
      .subscribe(
        (data: any) => {
          console.log('DATA IS ' + JSON.stringify(data));
          alert('Mock is created successfully!!');

        },
        (error: any) => {
          console.log('ERROR IS ' + JSON.stringify(error));
          alert('Mock Already Exist for the mentioned path and verb!!');
        }
      );
  }

  removeNewChoice(header) {
    const index = this.headers.indexOf(header);
    this.headers.splice(index, 1);
  }
}
