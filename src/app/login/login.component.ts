import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {AppService} from '../services/app.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';
import {NotificationService} from '../services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  credentials = {username: '', password: ''};
  errorMessage = undefined;
  authenticated = false;
  usernameSession = '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
              private appService: AppService, private router: Router, private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        NNI: [null, [Validators.required]],
        password: [null, [Validators.required]]
      }
    );
  }

  login(): void {
    this.appService.authenticate(this.credentials, () => {
    }).subscribe(response => {
      this.authenticated = !!response;
      this.usernameSession = this.credentials.username;
    }, (error) => {
      this.errorMessage = error.error.message;
    }, () => {if (this.authenticated) {
      this.router.navigateByUrl('/');
      this.notification.showSuccessConnexion('Bienvenue ' + this.usernameSession, 'Connexion');
    }}
    );
    this.appService.authenticateApp(this.credentials, () => {
    });
  }
}
