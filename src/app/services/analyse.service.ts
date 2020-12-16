import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PageableBlocage} from '../interfaces/pageableBlocage';


@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAnalyse(): Observable<PageableBlocage> {
    return this.http.get<PageableBlocage>(this.apiUrl + '/analyse');
  }
}
