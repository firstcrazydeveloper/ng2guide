import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { WebApiManager } from './services/webApiManager.service';
import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';
@NgModule({
    imports: [CommonModule, RouterModule, HttpModule, ReactiveFormsModule],
    declarations: [],
    exports: [],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthGuard, AuthService, WebApiManager]
        }
    }

}