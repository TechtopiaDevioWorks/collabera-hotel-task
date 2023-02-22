import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningInfoPageComponent } from './dining-info-page.component';

describe('DiningInfoPageComponent', () => {
  let component: DiningInfoPageComponent;
  let fixture: ComponentFixture<DiningInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiningInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
