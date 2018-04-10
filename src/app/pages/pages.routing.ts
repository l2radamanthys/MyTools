import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapPointComponent } from './map-point/map-point.component';


const routes: Routes  = [
    {
        component: HomeComponent,
        path: ''
    },

    {
        component: MapPointComponent,
        path: 'map/point'
    }
];

export const PagesRoutesModule = RouterModule.forRoot(routes, { enableTracing: true });
