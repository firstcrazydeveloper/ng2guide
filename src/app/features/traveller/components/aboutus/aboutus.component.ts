import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'aboutus',
    templateUrl: './aboutus.component.html'
})
export class AboutUsComponent {
    @Input('title') title: string;
    @Input() aboutData: any;
    testdata: string = 'hi';
    @Output() increaseValue = new EventEmitter<number>();
    @Output() decreaseValue = new EventEmitter<number>();
    count: number = 0;

    constructor(public router: Router, public changeDetectorRef: ChangeDetectorRef) {
    }

    increase() {
        this.count++;
        this.increaseValue.emit(this.count);
    }

    decrease() {
        this.count--;
        this.decreaseValue.emit(this.count);
    }
    ngOnInit() {
        
    }

    attach() {
        this.changeDetectorRef.reattach();
    }

    detach() {
        this.changeDetectorRef.detach();
    }
}