import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { TravellerService } from './traveller.service';
import { AuthService } from '../../shared/services/auth.service';
import { AppSettings } from '../../appSettings.setting';

@Component({
    selector: 'traveller',
    templateUrl: './traveller.component.html'
})
export class TravellerComponent {
   

    constructor(travellerService: TravellerService, authService: AuthService, public router: Router) {
    } 

   ngOnInit() {
        console.log('Traveller Component Called');
      
    }  
}