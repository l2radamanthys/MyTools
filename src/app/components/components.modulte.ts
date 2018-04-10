import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';



@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAf0sHdE38j-P3lRoe_pcbuwsMgiQ8X4Do'
        })
    ],
    declarations: [],
    exports: [
        AgmCoreModule,
    ]
})
export class ComponentsModule {}
