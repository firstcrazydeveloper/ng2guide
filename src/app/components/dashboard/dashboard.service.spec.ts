import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { DashBoardService } from './dashboard.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { WebApiManager } from '../../shared/services/webApiManager.service';
import { AuthService } from '../../shared/services/auth.service';

describe('DashBoardService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: AppSettings.BaseAPIUrl, useValue: 'http://example.com' },
                WebApiManager, AuthService, DashBoardService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('getDashBoardItemsCollection()', () => {

        it('should return an Observable<Array<Templates>>',
            inject([DashBoardService, XHRBackend], (dashBoardService, mockBackend) => {

                const mockResponse = {
                    data: [
                        { id: 0, title: 'Template 4' },
                        { id: 1, title: 'Template 1' },
                        { id: 2, title: 'Template 2' },
                        { id: 3, title: 'Template 3' },
                    ]
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                dashBoardService.getDashBoardItemsCollection().subscribe((items) => {
                    let myitems = items.data;
                    expect(myitems.length).toBe(4);
                    expect(myitems[0].title).toEqual('Template 4');
                    expect(myitems[1].title).toEqual('Template 1');
                    expect(myitems[2].title).toEqual('Template 2');
                    expect(myitems[3].title).toEqual('Template 3');
                });

            }));
    });
});