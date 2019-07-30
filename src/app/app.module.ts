import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarTileComponent } from './car-tile/car-tile.component';
import { MessageComponent } from './message/message.component';
import { CarTilesComponent } from './car-tiles/car-tiles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    MessageComponent,
    CarTilesComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
