import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './component/add-data/add-data.component';
import { DataUpdateComponent } from './component/data-update/data-update.component';
import { ShowAllDataComponent } from './component/show-all-data/show-all-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllDataComponent,
    AddDataComponent,
    DataUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
