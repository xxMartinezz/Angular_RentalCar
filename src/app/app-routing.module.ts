import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router'; /*import dopisany*/
import { CarListComponent } from './admin/car-list/car-list.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { RentalHistoryComponent } from './admin/rental-history/rental-history.component';
import { CarDetailsComponent } from './admin/car-details/car-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: MainContentComponent},
  {
    path: "admin", component: AdminComponent,
    children: [
      {path: "", redirectTo: 'cars', pathMatch: 'full'},
      {path: "cars", component: CarListComponent},
      {path: "customers", component: CustomerListComponent},
      {path: "rentals", component: RentalHistoryComponent},
      {path: "cars/:id", component: CarDetailsComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
