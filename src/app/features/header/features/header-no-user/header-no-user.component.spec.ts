import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoUserComponent } from './header-no-user.component';

describe('HeaderNoUserComponent', () => {
  let component: HeaderNoUserComponent;
  let fixture: ComponentFixture<HeaderNoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
