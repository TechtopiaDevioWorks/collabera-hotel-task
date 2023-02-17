import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageButtonComponent } from './header-page-button.component';

describe('HeaderPageButtonComponent', () => {
  let component: HeaderPageButtonComponent;
  let fixture: ComponentFixture<HeaderPageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
