import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AdminService } from './admin.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { WebApiManager } from '../../shared/services/webApiManager.service';
import { AuthService } from '../../shared/services/auth.service';

describe('AdminService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: AppSettings.BaseAPIUrl, useValue: 'http://example.com' },
                WebApiManager, AuthService, AdminService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('getAllAdminUsers()', () => {

        it('should return an Observable<Array<AdminUser>>',
            inject([AdminService, XHRBackend], (adminService, mockBackend) => {

                const mockResponse = {
                    users: [
                        { id: 0, name: 'Abhishek' },
                        { id: 1, name: 'Sahil' },
                        { id: 2, name: 'Amit' },
                        { id: 3, name: 'Nutan' },
                    ]
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                adminService.getAllAdminUsers().subscribe((response) => {
                    let userList = response.users;
                    expect(userList.length).toBe(4);
                    expect(userList[0].name).toEqual('Abhishek');
                    expect(userList[1].name).toEqual('Sahil');
                    expect(userList[2].name).toEqual('Amit');
                    expect(userList[3].name).toEqual('Nutan');
                });

            }));
    });
});