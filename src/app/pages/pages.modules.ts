import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyMaterialAutoimportModule } from '../others/my-material-autoimport.module';
import { NgModule } from '@angular/core';
import { PagesRoutesModule } from './pages.routing';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        PagesRoutesModule,
        MyMaterialAutoimportModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class PagesModule {}
