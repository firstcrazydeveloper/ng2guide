import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserModel } from '../models/user.model';
import { WebApiManager } from './webApiManager.service';
import { AppSettings } from '../../appSettings.setting';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    token: string;
    userData: Observable<any> = null;
    currentUser: UserModel;
    redirectUrl: string;
    userName: string = 'Guest';



    constructor(public webApiService: WebApiManager) { }


    public static loginUrl = AppSettings.BaseAPIUrl + 'login';

    login(id: string, password: string) {
        let param = {
            userId: id,
            password: password
        }

        // dummy data for testing
        if (id === 'abhishek' && password === 'sahil') {
            this.currentUser = new UserModel();
            this.currentUser.firstName = 'Abhishek';
            this.currentUser.lastName = 'Sahil';
            this.currentUser.isAunthenticate = true;
            this.currentUser.password = 'sahil';
            this.userName = 'abhishek';
        } else {
            this.currentUser = new UserModel();
            this.currentUser.isAunthenticate = false;
        }
        return Observable.of(this.currentUser).delay(5000).do(val => this.verifyuser(id, password));
    }

    setUserDetails(currentUser: UserModel) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }


    logout(): Observable<boolean> {

        this.token = null;
        this.isLoggedIn = false;
        this.currentUser = undefined;
        this.userName = 'Guest';
        localStorage.removeItem('currentUser');
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
    }

    verifyuser(id: string, password: string) {
        if (id === 'abhishek' && password === 'sahil') {
            this.currentUser = new UserModel();
            this.currentUser.firstName = 'Abhishek';
            this.currentUser.lastName = 'Sahil';
            this.currentUser.isAunthenticate = true;
            this.currentUser.password = 'sahil';
            this.userName = 'abhishek';
        } else {
            this.currentUser = new UserModel();
            this.currentUser.isAunthenticate = false;
        }
    }
}
