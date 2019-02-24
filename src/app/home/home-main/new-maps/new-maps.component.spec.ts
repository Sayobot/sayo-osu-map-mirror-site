import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMapsComponent } from './new-maps.component';

describe('NewMapsComponent', () => {
  let component: NewMapsComponent;
  let fixture: ComponentFixture<NewMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
