import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public user!: User;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        NNI: [null, [Validators.required]],
        password: [null, [Validators.required]]
      }
    );
    this.getLogin();
  }

  public getLogin(): void {
    this.loginService.getUserLogin()
      .subscribe(data => {
        this.user = data;
      });
  }

}
