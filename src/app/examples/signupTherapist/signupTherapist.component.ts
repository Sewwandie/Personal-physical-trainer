import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupTherapist',
  templateUrl: './signupTherapist.component.html',
  styleUrls: ['./signupTherapist.component.scss']
})
export class SignupTherapistComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
