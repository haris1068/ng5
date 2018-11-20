import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CreaterestComponent} from './createrest/createrest.component';
import {HttpClientModule} from '@angular/common/http';
import {RestmocksComponent} from './restmocks/restmocks.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateMockComponent } from './update-mock/update-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CreaterestComponent,
    RestmocksComponent,
    UpdateMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdateMockComponent]
})
export class AppModule {
}

export class NgxPaginationModule {
}
