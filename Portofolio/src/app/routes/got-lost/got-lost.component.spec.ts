import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotLostComponent } from './got-lost.component';

describe('GotLostComponent', () => {
  let component: GotLostComponent;
  let fixture: ComponentFixture<GotLostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotLostComponent]
    });
    fixture = TestBed.createComponent(GotLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
