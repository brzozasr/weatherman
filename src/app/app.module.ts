import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FlexModule } from "@angular/flex-layout";
import { MaterialModule } from "./materials/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexModule,
    BrowserAnimationsModule,
    LeafletModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
