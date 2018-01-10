import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { AdminRouting } from './admin.routing';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, AdminRouting, ReactiveFormsModule],
    declarations: [AdminComponent],
    exports: [AdminComponent],
    providers: [AdminService]
})
export class AdminModule { }