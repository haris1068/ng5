import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog , MatDialogConfig} from '@angular/material';
import {UpdateMockComponent} from '../update-mock/update-mock.component';

@Component({
  selector: 'app-restmocks',
  templateUrl: './restmocks.component.html',
  styleUrls: ['./restmocks.component.scss']
})
export class RestmocksComponent implements OnInit {
  myData: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {

    console.log('GET ALL THE MOCKS');
    this.http.get('http://mock-engine-dev.extnp.national.com.au/api/restmock?date=' + new Date())
      .subscribe(
        (res: any) => {
          this.myData = res.Items;
          console.log('res is ', res);
        },
        error => {
          alert('ERROR');
        });
  }

  open(row) {
    console.log('ROW IS ' + JSON.stringify(row));
    const tempData = {
      id: row.id,
      verb: row.verb,
      reqpath: row.reqpath,
      headers: row.headers,
      switches: [],
      cases: [{
        'key': 'default',
        'status': row.cases[0].status,
        'payload': row.cases[0].payload

      }]
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(UpdateMockComponent, dialogConfig);
    const instance = dialogRef.componentInstance;
    instance.myData = tempData;
    // dialogRef.afterClosed()
    //   .subscribe(row=  this.myData);
  }

  removeRestMock(row) {
    if (confirm('This will certainly delete your mock.')) {
      const index = this.myData.indexOf(row);
      this.http.delete('http://mock-engine-dev.extnp.national.com.au/api/restmock/' + row.id)
        .subscribe(
          (data: any) => {
            if (index !== -1) {
              this.myData.splice(index, 1);
            }
            console.log(data);
          },
          error => {
            console.log('Error');
          });
    }
  }

}
