import { Component } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.min.css']
})
export class DashboardComponent {
    title: string = 'app';
    templateCollection: Array<any>;
    isSuccess: boolean = false;
    template: any;
    aboutUs: any = {};
    count: number = 0;
    color: string;
    constructor(public dashBoardService: DashBoardService, authService: AuthService, public router: Router) {
    }

    getTemplateCollection() {
        this.dashBoardService.getDashBoardItemsCollection()
            .subscribe(templateList => {
                this.templateCollection = templateList;
            },
            err => {
            });
    }

    increaseValue(count: number) {
        this.count = count;
    }

    decreaseValue(count: number) {
        this.count = count;
    }

    ngOnInit() {
        console.log('DashBoard Component Called');
        this.aboutUs.firstName = 'Abhishek';
        this.aboutUs.lastName = 'Kumar';
    }

    addTemplate() {
        this.dashBoardService.AddTemplate(this.template)
            .subscribe(() => {
                //this.getTemplateCollection();
                this.isSuccess = true;
            },
            err => {
            });

    }

    removeTemplate() {
        this.dashBoardService.RemoveTemplate(this.template)
            .subscribe(() => {
                this.getTemplateCollection();
            },
            err => {
            });

    }

    updateTemplate() {
        this.dashBoardService.UpdateTemplate(this.template)
            .subscribe(() => {
                this.getTemplateCollection();
            },
            err => {
            });

    }
}
