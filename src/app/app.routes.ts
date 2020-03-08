import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { About1Component } from './about1/about1.component';
import { About3Component } from './about3/about3.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
    path: "home",
    component: HomeComponent
},
    {
        path: "about",
        component: AboutComponent,
        children: [{
            path: "about1",
            component:About1Component
        },
            {
                path: "about2",
                component: About2Component
         }
        ]
    },
    
    {
        path: "about3/:id",
        component: About3Component
    }
]