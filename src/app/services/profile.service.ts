import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
  changePassword = false;
  changeEmail = false;

  constructor(private http: HttpClient) {
  }

  get(id: number, username: string, password: string, email: string): Observable<User> {
    // @ts-ignore
    return this.http.get(this.apiUrl + '/profile/', {
      params: {
       username, password, email
      }
    });
  }

  viewChangePassword(): void {
    this.changePassword = true;
    this.changeEmail = false;
  }

  viewChangeEmail(): void {
    this.changeEmail = true;
    this.changePassword = false;
  }
}
