import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsBoxComponent } from './maps-box.component';

describe('MapsBoxComponent', () => {
    let component: MapsBoxComponent;
    let fixture: ComponentFixture<MapsBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapsBoxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapsBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
