import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../services/register.service';
import {NotificationService} from '../services/notification.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  newUser = {username: '', password: '', email: ''};
  errorMessage = undefined;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private registerService: RegisterService, private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        NNI: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(4)]],
      }
    );
  }

  register(): void {
    this.registerService.postNewUser(this.newUser.username,
      this.newUser.password, this.newUser.email).subscribe((data) => {
      this.router.navigateByUrl('/login');
      this.notification.showSuccessRegister('Vous pouvez vous connecter maintenant ' + this.newUser.username, 'Enregistrement effectué');
    }, (error) => {
        this.errorMessage = error.error.message;
        this.notification.showErrorRegister('Une erreur a été saisie', 'Attention');
    });
  }

}
