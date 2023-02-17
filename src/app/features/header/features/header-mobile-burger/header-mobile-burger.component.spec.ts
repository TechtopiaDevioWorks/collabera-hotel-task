import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileBurgerComponent } from './header-mobile-burger.component';

describe('HeaderMobileBurgerComponent', () => {
  let component: HeaderMobileBurgerComponent;
  let fixture: ComponentFixture<HeaderMobileBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMobileBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMobileBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
