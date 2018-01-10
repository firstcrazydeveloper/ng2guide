import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TravellerComponent } from './traveller.component';
import { TravellerService } from './traveller.service';
import { TravellerRouting } from './traveller.routing';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { UserComponent } from './components/user/user.component';
import { AdminUserPipe } from './pipes/adminuser.pipe';
import { AdminUserImpurePipe } from './pipes/adminuser.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, TravellerRouting, ReactiveFormsModule],
    declarations: [TravellerComponent, HomeComponent, ProfileComponent, AboutUsComponent, UserComponent, AdminUserImpurePipe, AdminUserPipe, HighlightDirective],
    exports: [TravellerComponent, HomeComponent, ProfileComponent, AboutUsComponent, UserComponent, AdminUserImpurePipe, AdminUserPipe, HighlightDirective],
    providers: [TravellerService]
})
export class TravellerModule { }