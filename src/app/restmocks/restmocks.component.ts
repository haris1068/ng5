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
    this.http.get('http://localhost:3000/api/restmock?date=' + new Date())
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(UpdateMockComponent, dialogConfig);
  }

  removeRestMock(row) {
    if (confirm('This will certainly delete your mock.')) {
      const index = this.myData.indexOf(row);
      this.http.delete('http://localhost:3000/api/restmock/' + row.id)
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
