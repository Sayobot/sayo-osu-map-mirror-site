import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBoxComponent } from './music-box.component';

describe('MusicBoxComponent', () => {
  let component: MusicBoxComponent;
  let fixture: ComponentFixture<MusicBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
