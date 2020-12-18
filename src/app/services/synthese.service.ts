import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyntheseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }
  getSynthese(): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.apiUrl + '/synthese');
  }
}
