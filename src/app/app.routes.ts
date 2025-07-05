// app.routes.ts or app-routing.module.ts
import { Routes } from '@angular/router';
import { DashBoardComponentComponent } from './dash-board-component/dash-board-component';
import { ListingComponent } from './listing/listing.component';
import { PropertiesComponent } from './properties/properties.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // ✅ import guard
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashBoardComponentComponent,
    children: [
      { path: 'listing', component: ListingComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'profile', component: ProfileComponent },
      
    ]
  },
  { path: '**', redirectTo: '' }
];
