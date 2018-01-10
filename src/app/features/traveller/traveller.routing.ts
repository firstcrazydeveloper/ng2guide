import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravellerComponent } from './traveller.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../../shared/services/authGuard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';


const travellerRoutes: Routes = [
    {
        path: '',
        component: TravellerComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                       canActivateChild: [AuthGuard],
                        component: HomeComponent
                    },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'home', component: HomeComponent },
                    { path: 'user', component: UserComponent }
                ]
            }
        ]
    }

];

export const TravellerRouting: ModuleWithProviders = RouterModule.forChild(travellerRoutes);