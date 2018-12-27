import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSayobotComponent } from './support-sayobot.component';

describe('SupportSayobotComponent', () => {
  let component: SupportSayobotComponent;
  let fixture: ComponentFixture<SupportSayobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportSayobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSayobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
