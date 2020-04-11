import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailTagsComponent } from './map-detail-tags.component';

describe('MapDetailTagsComponent', () => {
    let component: MapDetailTagsComponent;
    let fixture: ComponentFixture<MapDetailTagsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapDetailTagsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapDetailTagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
