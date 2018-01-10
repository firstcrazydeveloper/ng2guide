import { TestBed, async } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { DashBoardService } from './dashboard.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { appRouting } from '../../app.routing'
import { PageNotFoundComponent } from '../../components/pagenotfound/pagenotfound.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

class MockDashBoardService {
    templateCollection: Array<any> = [];


    AddTemplate(template: any) {
        this.templateCollection.push(template);
        return Observable.of(true);
    }

    RemoveTemplate(template: any) {
        this.templateCollection.splice(this.templateCollection.indexOf(template), 1);
        return Observable.of(true);
    }

    UpdateTemplate(template: any) {
        this.templateCollection.splice(this.templateCollection.indexOf(template), 1);
        this.templateCollection.push(template);
        return Observable.of(true).delay(10);
    }

    GetDashBoardItemsCollection() {
        this.templateCollection.push({ id: 0, name: 'template 1' });
        return Observable.of(this.templateCollection).delay(10);
    }

    GetDashBoardItem(itemId: number) {
        return { id: 0, name: 'template' };
    }
}

class MockTodoService {
}

class MockAuthService {
}


describe('DashBoard Component', () => {
    let app: DashboardComponent;
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent, PageNotFoundComponent
            ],
            providers: [
                { provide: DashBoardService, useClass: MockDashBoardService },
                { provide: AuthService, useClass: MockAuthService }
            ],
            imports: [RouterTestingModule, FormsModule, appRouting]
        }).compileComponents().then(() => {
            let fixture = TestBed.createComponent(DashboardComponent);
            app = fixture.componentInstance;

        });
    }));

    it('should create a dashboard component', async(() => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should add template', async(() => {
        app.template = { id: 0, name: 'template' };
        expect(app.isSuccess).toBe(false);
        app.addTemplate();
        expect(app.template.id).toBe(0);
        expect(app.template.name).toBe('template');
        expect(app.isSuccess).toBe(true);
    }));

    //it('should remove todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    app.newTodoText = 'Data';
    //    app.addTodo();
    //    expect(app.todoStore.todos.length).toBe(2);
    //    let tempTodo = app.todoStore.todos[0];
    //    app.remove(tempTodo);
    //    expect(app.todoStore.todos.length).toBe(1);
    //    expect(app.todoStore.todos[0].title).toBe('Data');
    //}));

    //it('should toggle Completion of Todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.toggleCompletion(tempTodo);
    //    expect(tempTodo.completed).toBe(true);
    //}));

    //it('should remove completed todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.toggleCompletion(tempTodo);
    //    app.newTodoText = 'Sample 2';
    //    app.addTodo();
    //    app.newTodoText = 'Sample 3';
    //    app.addTodo();
    //    app.removeCompleted();
    //    expect(app.todoStore.todos.length).toBe(2);
    //}));

    //it('should edit todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.editTodo(tempTodo);
    //    expect(tempTodo.editing).toBe(true);
    //}));

    //it('should update todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.updateEditingTodo(tempTodo, 'New Title');
    //    expect(tempTodo.title).toBe('New Title');
    //}));

    //it('should cancel editing todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.cancelEditingTodo(tempTodo);
    //    expect(tempTodo.editing).toBe(false);
    //}));

    //it('should stop editing todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.stopEditing(tempTodo, 'Old Title');
    //    expect(tempTodo.title).toBe('Old Title');
    //    expect(tempTodo.editing).toBe(false);
    //}));

});
