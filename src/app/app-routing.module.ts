import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router'; /*import dopisany*/

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: MainContentComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
