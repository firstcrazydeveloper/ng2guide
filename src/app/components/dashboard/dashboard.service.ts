import { Injectable, Output, EventEmitter } from '@angular/core';
import { WebApiManager } from '../../shared/services/webApiManager.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class DashBoardService {
    dashBoardDataCollection: Observable<any> = null;
    dashBoardItem: any;
    public static dashboardUrl = 'dashboard';
    dummyToken: string = 'dummytoken';




    constructor(private webApiService: WebApiManager, public authService: AuthService) {
    }





    getDashBoardItemsCollection() {
        this.dashBoardDataCollection = this.webApiService.get(DashBoardService.dashboardUrl);
        return this.dashBoardDataCollection;
    }



    getDashBoardItem(itemId: number) {
        let modifiedUrl = DashBoardService.dashboardUrl + '/' + itemId;
        this.dashBoardItem = this.webApiService.get(modifiedUrl);
        return modifiedUrl;
    }

   

    AddTemplate(template: any) {
        return this.webApiService.post(DashBoardService.dashboardUrl, template, this.dummyToken);

    }

    RemoveTemplate(template: any) {
        return Observable.of(true).delay(10);
    }

    UpdateTemplate(template: any) {
        return Observable.of(true).delay(10);
    }

    clearCache() {
        this.dashBoardDataCollection = null;
    }
}