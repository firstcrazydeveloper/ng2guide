import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.min.css']
})
export class LoginComponent {
    id: string;
    password: string;
    user: UserModel = new UserModel();
    error: string = '';

    constructor(public router: Router, public authService: AuthService) {
        this.error = '';
    }

    login() {
        this.error = '';
        this.authService.login(this.id, this.password).subscribe((user: UserModel) => {
            if (user.isAunthenticate) {
                this.authService.isLoggedIn = true;
                this.authService.currentUser = user;
                this.authService.setUserDetails(user);
                this.authService.token = user.token;
                this.authService.userName = user.firstName;
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'admin';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate(['admin'], navigationExtras);

            }
            else {
                this.error = 'UserId and Password are not correct!';

            }

        },
            err => {
                this.error = 'We are getting error to connect with server! Try again';

            });


    }
}