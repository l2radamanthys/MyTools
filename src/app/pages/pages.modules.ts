import { MapPolylineComponent } from './map-polyline/map-polyline.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.modulte';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MapPointComponent } from './map-point/map-point.component';
import { NgModule } from '@angular/core';
import { PagesRoutesModule } from './pages.routing';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        PagesRoutesModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent,
        MapPointComponent,
        MapPolylineComponent
    ]
})
export class PagesModule {}
