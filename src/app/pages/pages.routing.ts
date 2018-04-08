import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes  = [
    {
        component: HomeComponent,
        path: ''
    }
];

export const PagesRoutesModule = RouterModule.forRoot(routes, { enableTracing: true });
