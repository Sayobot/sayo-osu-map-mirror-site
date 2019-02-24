import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMapsComponent } from './search-maps.component';

describe('SearchMapsComponent', () => {
  let component: SearchMapsComponent;
  let fixture: ComponentFixture<SearchMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
