import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageDropdownComponent } from './header-page-dropdown.component';

describe('HeaderPageDropdownComponent', () => {
  let component: HeaderPageDropdownComponent;
  let fixture: ComponentFixture<HeaderPageDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPageDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
