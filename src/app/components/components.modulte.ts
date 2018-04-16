import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialAutoimportModule } from '../others/my-material-autoimport.module';
import { NgModule } from '@angular/core';
import { SaveAsModalContComponent } from './save-as-modal-cont/save-as-modal-cont.component';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAf0sHdE38j-P3lRoe_pcbuwsMgiQ8X4Do'
        }),
        MyMaterialAutoimportModule,
    ],
    declarations: [
        SaveAsModalContComponent,
    ],
    exports: [
        MyMaterialAutoimportModule,
        AgmCoreModule,

        SaveAsModalContComponent,
    ],
    entryComponents: [
        SaveAsModalContComponent,
    ],
})
export class ComponentsModule {}
