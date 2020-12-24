import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = environment.apiUrl;
  authenticated = false;
  usernameSession = '';

  constructor(private http: HttpClient) {
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
      });
  }
}
