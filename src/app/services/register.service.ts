import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  postNewUser(username: string, password: string, email: string): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/register', {},
      {params: {username: '' + username, password: '' + password, email: '' + email}});
  }

}
