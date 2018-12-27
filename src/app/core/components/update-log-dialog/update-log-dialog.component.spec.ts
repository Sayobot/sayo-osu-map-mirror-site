import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogDialogComponent } from './update-log-dialog.component';

describe('UpdateLogDialogComponent', () => {
  let component: UpdateLogDialogComponent;
  let fixture: ComponentFixture<UpdateLogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
