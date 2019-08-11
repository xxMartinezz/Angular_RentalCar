import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarTileComponent } from './car-tile/car-tile.component';
import { MessageComponent } from './message/message.component';
import { CarTilesComponent } from './car-tiles/car-tiles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { CarListComponent } from './admin/car-list/car-list.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { RentalHistoryComponent } from './admin/rental-history/rental-history.component';
import { CarDetailsComponent } from './admin/car-details/car-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarDetailsEditComponent } from './admin/car-details-edit/car-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    MessageComponent,
    CarTilesComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AdminComponent,
    CarListComponent,
    CustomerListComponent,
    RentalHistoryComponent,
    CarDetailsComponent,
    PageNotFoundComponent,
    CarDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
