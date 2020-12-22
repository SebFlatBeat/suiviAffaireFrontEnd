import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {User} from '../interfaces/user';
import {AppService} from '../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public user!: User;
  credentials = {username: '', password: ''};

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
              private appService: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        NNI: [null, [Validators.required]],
        password: [null, [Validators.required]]
      }
    );
  }

  login(): boolean {
    this.appService.authenticate(this.credentials, () => {
      this.loginService.postUserLogin(this.credentials.username, this.credentials.password);
      if (this.appService.authenticated) {
        this.router.navigateByUrl('/');
      }
    });
    return false;
  }
}
