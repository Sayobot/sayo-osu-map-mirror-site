import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyTableComponent } from './difficulty-table.component';

describe('DifficultyTableComponent', () => {
  let component: DifficultyTableComponent;
  let fixture: ComponentFixture<DifficultyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
