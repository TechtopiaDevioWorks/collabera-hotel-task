import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveNowPageComponent } from './reserve-now-page.component';

describe('ReserveNowPageComponent', () => {
  let component: ReserveNowPageComponent;
  let fixture: ComponentFixture<ReserveNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveNowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
