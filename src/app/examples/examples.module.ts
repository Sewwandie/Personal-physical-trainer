import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import {SignupTherapistComponent} from './signupTherapist/signupTherapist.component';
import {SignupPatientComponent} from './signupPatient/signupPatient.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
    imports: [
        CommonModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 80,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
          }),
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        SignupTherapistComponent,
        SignupPatientComponent
    ]
})
export class ExamplesModule { }
