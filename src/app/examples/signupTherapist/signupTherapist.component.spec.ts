import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTherapistComponent } from './signupTherapist.component';

describe('SignupTherapistComponent', () => {
  let component: SignupTherapistComponent;
  let fixture: ComponentFixture<SignupTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
