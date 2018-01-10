import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AdminService } from './admin.service';
import { AuthService } from '../../shared/services/auth.service';
import { AppSettings } from '../../appSettings.setting';
import { Property } from './models/property';
import { User } from './models/user';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    adminForm: FormGroup;
    langs: string[] = [
        'English',
        'French',
        'German',
    ];

    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;

    constructor(adminService: AdminService, authService: AuthService, public formBuilder: FormBuilder, public router: Router) {
    }



    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.language = new FormControl('', Validators.required);
    }

    createForm() {
        this.adminForm = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language,
            properties: this.formBuilder.array([
                this.initProperty(),
            ])
        });
    }

    createFormBuilder() {
        this.adminForm = this.formBuilder.group({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language,
            properties: this.formBuilder.array([
                this.initProperty(),
            ])
        });
    }

    initProperty() {
        // initialize our property
        return this.formBuilder.group({
            name: ['', Validators.required],
            postcode: [''],
            userId: ['']
        });
    }

    addProperty() {
        // add property to the list
        const control = <FormArray>this.adminForm.controls['properties'];
        control.push(this.initProperty());
    }

    removeProperty(i: number) {
        // remove property from the list
        const control = <FormArray>this.adminForm.controls['properties'];
        control.removeAt(i);
    }

    addAdminUser() {

    }

    reset() {
        this.createFormControls();
        this.createFormBuilder();
    }
}