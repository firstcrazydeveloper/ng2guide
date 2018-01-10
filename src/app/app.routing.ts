import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/services/authGuard.service';
import { LoginComponent } from './components/login/login.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'traveller',
        loadChildren: 'app/features/traveller/traveller.module#TravellerModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/features/admin/admin.module#AdminModule'
    },
    { path: '**', component: PageNotFoundComponent }

];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });