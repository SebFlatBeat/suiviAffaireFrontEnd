import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }

  logout(): void {
    this.http.post('logout', {}).pipe(finalize(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    })).subscribe();
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }
}
