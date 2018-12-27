import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMapDialogComponent } from './not-found-map-dialog.component';

describe('NotFoundMapDialogComponent', () => {
  let component: NotFoundMapDialogComponent;
  let fixture: ComponentFixture<NotFoundMapDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundMapDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundMapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
