import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailInfoComponent } from './map-detail-info.component';

describe('MapDetailInfoComponent', () => {
    let component: MapDetailInfoComponent;
    let fixture: ComponentFixture<MapDetailInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapDetailInfoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapDetailInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
