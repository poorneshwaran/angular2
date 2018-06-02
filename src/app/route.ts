import { Routes } from '@angular/router';
import { MapComponent } from "./map/map.component";
// import { SliderCheckComponent } from "./slider-check/slider-check.component";
import { RangeslideComponent } from "./rangeslide/rangeslide.component";
import { ThumbnailComponent } from "./thumbnail/thumbnail.component";
import { LoginComponent} from "./login/login.component";
//import {SliderComponent} from "./slider/slider.component";
import {RegisterComponent}  from "./register/register.component";
import { connectComponent } from './connect/connect.component';
export const rootRouterConfig: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'map/:seriesid',component:MapComponent},
    {path:'map',component:MapComponent},
    {path:'login',component:LoginComponent},
    {path:'connect', component:connectComponent}
    // {path:'slider',component:SliderCheckComponent},
    //{path:'rangeslider',component:RangeslideComponent},
    //{path:'thumbnail',component:ThumbnailComponent},
   // {path:'slider',component:SliderComponent}

];


