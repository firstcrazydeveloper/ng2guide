import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    count: number = 0;
    title: string = 'traveller';
    aboutUs: any = {};

    constructor(public router: Router) {
    }

    increaseValue(count: number) {
        this.count = count;
    }

    decreaseValue(count: number) {
        this.count = count;
    }

    ngOnInit() {
        console.log('Profile Component Called');
        this.aboutUs.firstName = 'Abhishek';
        this.aboutUs.lastName = 'Kumar';
    } 
}