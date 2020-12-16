import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PageableSge} from '../interfaces/pageableSge';


@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAnalyseSge(): Observable<PageableSge> {
    return this.http.get<PageableSge>(this.apiUrl + '/analyse');
  }
}
