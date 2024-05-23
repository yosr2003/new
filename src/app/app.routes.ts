import { Routes } from '@angular/router';
import { FypComponent } from './components/user-interface/fyp/fyp.component';
import { ProfileComponent } from './components/user-interface/profile/profile.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { EspaceClasseComponent } from './components/user-interface/espace-classe/espace-classe.component';
import { HomeComponent } from './components/home/home.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { SettingComponent } from './components/user-interface/setting/setting.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';




export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'homepage', title:'homepage', component:HomeComponent},
    {path:'login', title:'homepage', component:LoginComponent},
    { path: 'logout', component: LogoutComponent },
    
    {path: 'userInter',component:UserInterfaceComponent,
    canActivate: [authGuard],
    children: [
      { path: 'fyp', title: 'for you', component: FypComponent },
      { path: 'espaceClasse', component: EspaceClasseComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'setting', component: SettingComponent },
    ],
  },
    {path:"calendar", component:CalendrierComponent},
    {path:"", redirectTo:"homepage",pathMatch:"full"},
    {path:"**", component:ErrorsComponent},
    
];
