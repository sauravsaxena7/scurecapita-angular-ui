import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import ROUTES_CONSTANT from './shared/constant/RouteConstant';

export const routes: Routes = [


    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"me",component:ProfileComponent},
    {path:ROUTES_CONSTANT.SIGN_IN,component:LoginComponent},
    {path:ROUTES_CONSTANT.SIGN_UP,component:SignUpComponent},

    //page not found
    {path:"**",component:PageNotFoundComponent}
];
