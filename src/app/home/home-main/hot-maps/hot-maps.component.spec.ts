import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMapsComponent } from './hot-maps.component';

describe('HotMapsComponent', () => {
  let component: HotMapsComponent;
  let fixture: ComponentFixture<HotMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
