import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  newUser = {username: '', password: '', email: ''};

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        NNI: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  register(): void {
    this.registerService.postNewUser( this.newUser.username,
      this.newUser.password, this.newUser.email);
    this.router.navigateByUrl('/login');
  }

}
