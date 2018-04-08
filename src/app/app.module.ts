import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.modules';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        PagesModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
