import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService implements CanActivate {
  private apiUrl = environment.apiUrl;
  authenticated = false;
  usernameSession = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authenticated;
  }

  authenticate(credentials: { username: any; password: any; } |
    undefined, callback: { (): void; (): any; } | undefined): Observable<any> {
    return this.http.get(this.apiUrl + '/user',
      {params: {userApp: '' + credentials?.username, password: '' + credentials?.password}});
  }

  authenticateApp(credentials: { username: any; password: any; } |
    undefined,    callback: { (): void; (): any; } | undefined): void {
    this.http.get(this.apiUrl + '/user',
      {params: {userApp: '' + credentials?.username, password: '' + credentials?.password}})
      .subscribe(response => {
        this.authenticated = !!response;
        this.usernameSession = credentials?.username;
        this.router.navigateByUrl('/analyse');
      });
  }
}
