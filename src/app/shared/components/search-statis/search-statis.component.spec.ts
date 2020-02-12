import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStatisComponent } from './search-statis.component';

describe('SearchStatisComponent', () => {
    let component: SearchStatisComponent;
    let fixture: ComponentFixture<SearchStatisComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchStatisComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchStatisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
