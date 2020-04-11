import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailContainerComponent } from './map-detail-container.component';

describe('MapDetailContainerComponent', () => {
    let component: MapDetailContainerComponent;
    let fixture: ComponentFixture<MapDetailContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapDetailContainerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapDetailContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
