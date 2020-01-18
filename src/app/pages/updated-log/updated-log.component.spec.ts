import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedLogComponent } from './updated-log.component';

describe('UpdatedLogComponent', () => {
    let component: UpdatedLogComponent;
    let fixture: ComponentFixture<UpdatedLogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdatedLogComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdatedLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
