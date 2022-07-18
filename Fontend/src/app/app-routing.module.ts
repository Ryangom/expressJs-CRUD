import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './component/add-data/add-data.component';
import { DataUpdateComponent } from './component/data-update/data-update.component';
import { ShowAllDataComponent } from './component/show-all-data/show-all-data.component';

const routes: Routes = [
  { path: '', component:ShowAllDataComponent },
  { path: 'add', component:AddDataComponent },
  { path: 'update/:id', component:DataUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
