import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailRadarChartComponent } from './map-detail-radar-chart.component';

describe('MapDetailRadarChartComponent', () => {
  let component: MapDetailRadarChartComponent;
  let fixture: ComponentFixture<MapDetailRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDetailRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
