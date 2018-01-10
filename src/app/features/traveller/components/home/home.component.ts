import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    color: string;
    constructor(public router: Router) {
    }
}