import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../shared/services/authGuard.service';


const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuard],
                        component: AdminComponent
                    }
                ]
            }
        ]
    }

];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);