import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = environment.apiUrl;
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: { username: any; password: any; } | undefined, callback: { (): void; (): any; } | undefined): void {
    this.http.get(this.apiUrl + '/user', {params: {userApp: '' + credentials?.username}}).subscribe(response => {
      this.authenticated = !!response;
      return callback && callback();
    });
  }

}
