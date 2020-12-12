import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FetchItemsService } from './fetch-items.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartListComponent } from './cart-list/cart-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemBlockComponent } from './item-block/item-block.component';
import { CartDataService } from './cart-data.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CartListComponent,
    ItemBlockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [FetchItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
