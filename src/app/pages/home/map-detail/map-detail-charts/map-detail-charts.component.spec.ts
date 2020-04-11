import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailChartsComponent } from './map-detail-charts.component';

describe('MapDetailChartsComponent', () => {
    let component: MapDetailChartsComponent;
    let fixture: ComponentFixture<MapDetailChartsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapDetailChartsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapDetailChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
