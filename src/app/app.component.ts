import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AppService} from './services/app.service';
import {LoginComponent} from './login/login.component';
import {NotificationService} from './services/notification.service';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = environment.apiUrl;
  constructor(private app: AppService, private http: HttpClient,
              private router: Router, private login: LoginComponent, private notifyService: NotificationService) {
    this.app.authenticate(undefined, undefined);
  }

  logout(): void {
    this.http.post(this.apiUrl + '/logout', {}).pipe(finalize(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
      this.showToaster();
    })).subscribe();
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }

  usernameSession(): string {
    return this.app.usernameSession;
  }

  showToaster(): any{
    this.notifyService.showSuccessDeconnexion('Vous êtes bien déconnecté(e) !!', 'Déconnexion');
  }


}
