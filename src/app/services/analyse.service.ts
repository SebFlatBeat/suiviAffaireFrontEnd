import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Analyse} from '../interfaces/analyse';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAnalyse(): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(this.apiUrl + '/analyse');
  }
}
