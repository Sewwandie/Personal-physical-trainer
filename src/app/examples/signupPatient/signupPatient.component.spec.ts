import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPatientComponent } from './signupPatient.component';

describe('SignupPatientComponent', () => {
  let component: SignupPatientComponent;
  let fixture: ComponentFixture<SignupPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});