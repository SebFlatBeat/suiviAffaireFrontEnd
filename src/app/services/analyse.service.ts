import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PageableBlocage} from '../interfaces/pageableBlocage';
import {AppService} from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appService: AppService) {
  }

  getAnalyse(): Observable<PageableBlocage> {
    return this.http.get<PageableBlocage>(this.apiUrl + '/analyse');
  }

  putBlocage(id: number, choix: string, username: string): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/blocage', {},
      {params: {id: '' + id, choix: '' + choix, username: '' + this.appService.usernameSession}});
  }

  postSearch(numeroAffaire: string, prm: string, idc: string, portefeuille: string,
             etatAffaire: string, etatContractuel: string, blocageSource: string): Observable<PageableBlocage> {
    return this.http.post<PageableBlocage>(this.apiUrl + '/filter',
      {
        numeroAffaire, prm, idc,
        portefeuille, etatAffaire,
        etatContractuel, blocageSource
      });
  }

  listBlocage(request: any): Observable<any>{
    const endpoint = this.apiUrl + '/analyse';
    const params = request;
    return this.http.get(endpoint, { params });
  }
}
