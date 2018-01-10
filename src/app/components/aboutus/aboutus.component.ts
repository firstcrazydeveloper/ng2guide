import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'aboutus',
    templateUrl: './aboutus.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent {
    @Input('title') title: string;
    @Input() aboutData: any;
    testdata: string = 'hi';
    @Output() increaseValue = new EventEmitter<number>();
    @Output() decreaseValue = new EventEmitter<number>();
    count: number = 0;

    constructor(authService: AuthService, public router: Router) {
    }

    increase() {
        this.count++;
        this.increaseValue.emit(this.count);
    }

    decrease() {
        this.count--;
        this.decreaseValue.emit(this.count);
    }
}