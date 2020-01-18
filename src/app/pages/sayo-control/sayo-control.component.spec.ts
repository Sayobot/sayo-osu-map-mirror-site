import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayoControlComponent } from './sayo-control.component';

describe('SayoControlComponent', () => {
    let component: SayoControlComponent;
    let fixture: ComponentFixture<SayoControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SayoControlComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SayoControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
