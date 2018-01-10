import { Injectable, Output, EventEmitter } from '@angular/core';
import { WebApiManager } from '../../shared/services/webApiManager.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AdminService {
    adminUserList: Observable<any> = null;


    constructor(public webApiManager: WebApiManager) {

    }


    public static adminAPIUrl = AppSettings.BaseAPIUrl + 'admin';


    getAllAdminUsers() {
        this.adminUserList = this.webApiManager.get(AdminService.adminAPIUrl);
        return this.adminUserList;
    }


    addAdminUser(user: any) {

    }


    private addUpdateAdminUser(user: any) {


    }


    deleteAdminUser() {

    }
}