import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailLevelComponent } from './map-detail-level.component';

describe('MapDetailLevelComponent', () => {
    let component: MapDetailLevelComponent;
    let fixture: ComponentFixture<MapDetailLevelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapDetailLevelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapDetailLevelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
