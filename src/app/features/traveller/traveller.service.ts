import { Injectable, Output, EventEmitter } from '@angular/core';
import { WebApiManager } from '../../shared/services/webApiManager.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class TravellerService {
    todosCollection: Observable<any> = null;
   

    constructor(public webApiManager: WebApiManager) {
        // TODO >> Update this service file in proper way after using this Web API Service
        // this.getAllToDoList();
    }

    // This is url to get data from web api
    public static todoListAPIUrl = AppSettings.BaseAPIUrl + 'todolist';

    // Get all to do list from Web API server
    getAllToDoList() {
       
    }

    // Add new Todo in database through Web API request
    add(title: String) {
       
    }


    // Make API request to Add To Do
    private addUpdateToDo(newItem: any) {
       

    }

    // Filter To Do List
    private getToDoWithCompleted(completed: boolean) {
      
    }

    // Make API request to get all To Do list 
    getAllTodo() {
       
    }

    removeCompleted() {
        this.getToDoWithCompleted(false);
    }

    getRemaining() {
        return this.getToDoWithCompleted(false);
    }

    getCompleted() {
        return this.getToDoWithCompleted(true);
    }
}