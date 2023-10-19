import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedMenuComponent } from './expanded-menu.component';

describe('ExpandedMenuComponent', () => {
  let component: ExpandedMenuComponent;
  let fixture: ComponentFixture<ExpandedMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedMenuComponent]
    });
    fixture = TestBed.createComponent(ExpandedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
