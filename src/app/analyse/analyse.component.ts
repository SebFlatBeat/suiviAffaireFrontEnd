import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';
import {PageableBlocage} from '../interfaces/pageableBlocage';
import {Blocage} from '../interfaces/blocage';
import {LoginComponent} from '../login/login.component';
import {NotificationService} from '../services/notification.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {
  public analysesBlocage!: PageableBlocage;

  myBlocageControl = new FormControl();
  optionsBlocage: string[] = ['SGE', 'COSY', 'GEC', 'Ne pas traiter'];
  filteredOptionsBlocage: Observable<string[]> | any;

  myEtatAffaireControl = new FormControl();
  optionsEtatAffaire: string[] = ['Close, prestation réalisée', 'Demande reçue', 'En cours de clôture',
    'Intervention planifiée', 'Planification en cours', 'Recevabilité en cours', 'Replanification demandée',
    'Solde à corriger'];
  filteredOptionsEtatAffaire: Observable<string[]> | any;

  myEtatContractuelControl = new FormControl();
  optionsEtatContractuel: string[] = ['SERVC', 'INACTIF'];
  filteredOptionsEtatContractuel: Observable<string[]> | any;

  myPortefeuilleControl = new FormControl();
  optionsPortefeuille: string[] = ['IDF', 'OUEST', 'NORD EST', 'SUD'];
  filteredOptionsPortefeuille: Observable<string[]> | any;

  onOff = false;
  searchForm!: FormGroup;
  newSearch = {
    numeroAffaire: '', prm: '', idc: '', portefeuille: '',
    etatAffaire: '', etatContractuel: '', blocageSource: ''
  };
  totalElements = 0;
  loading!: boolean;

  page = 0;
  size = 5;

  constructor(private analyseService: AnalyseService, private login: LoginComponent,
              private notification: NotificationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.search();
  }

  public getData(): void {
    this.analyseService.getAnalyse()
      .subscribe(data => {
        let tab: Blocage [] = [];
        tab = tab.concat(data.content.filter(x => x.blocageSource === 'NONTRAITE'));
        tab = tab.concat(data.content.filter(x => x.blocageSource !== 'NONTRAITE'));
        data.content = tab;
        this.analysesBlocage = data;
      });
  }

  onChange(value: any, id: number): void {
    this.analyseService.putBlocage(id, value, this.login.usernameSession).subscribe();
    if (value !== 'NONTRAITE') {
      this.notification.showSuccessPut('Vous avez choisi(e) ' + value, 'Choix du blocage');
    } else {
      this.notification.showWarnPut('Vous avez choisi(e) ne pas traiter', 'Choix du blocage');
    }
  }

  createForm(): any {
    this.filteredOptionsBlocage = this.myBlocageControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBlocage(value))
    );
    this.filteredOptionsEtatAffaire = this.myEtatAffaireControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEtatAffaire(value))
    );
    this.filteredOptionsEtatContractuel = this.myEtatContractuelControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEtatContractuel(value))
    );
    this.filteredOptionsPortefeuille = this.myPortefeuilleControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPortefeuille(value))
    );
    this.searchForm = this.formBuilder.group(
      {
        numeroAffaire: [null],
        prm: [null],
        idc: [null],
        portefeuille: [null],
        etatAffaire: [null],
        etatContractuel: [null],
        etatBlocage: [null]
      }
    );
  }

  private _filterBlocage(value: string): string[] {
    const filterValueBlocage = value.toLowerCase();
    return this.optionsBlocage.filter(option => option.toLowerCase()
      .indexOf(filterValueBlocage) === 0);
  }

  private _filterEtatAffaire(value: string): string[] {
    const filterValueEtatAffaire = value.toLowerCase();
    return this.optionsEtatAffaire.filter(option => option.toLowerCase()
      .indexOf(filterValueEtatAffaire) === 0);
  }

  private _filterEtatContractuel(value: string): string[] {
    const filterValueEtatContractuel = value.toLowerCase();
    return this.optionsEtatContractuel.filter(option => option.toLowerCase()
      .indexOf(filterValueEtatContractuel) === 0);
  }

  private _filterPortefeuille(value: string): string[] {
    const filterValuePortefeuille = value.toLowerCase();
    return this.optionsPortefeuille.filter(option => option.toLowerCase()
      .indexOf(filterValuePortefeuille) === 0);
  }

  searchOn(): void {
    this.onOff = true;
  }

  searchOff(): void {
    this.onOff = false;
  }

  search(): void {
    this.analyseService.getSearch(this.newSearch.numeroAffaire, this.newSearch.prm, this.newSearch.idc,
      this.newSearch.portefeuille, this.newSearch.etatAffaire, this.newSearch.etatContractuel,
      this.newSearch.blocageSource, this.page, this.size).subscribe((data) => {
      this.analysesBlocage = data;
      this.totalElements = data.totalElements;
    });
  }

  private getBlocage(request: any): void {
    this.loading = true;
    this.analyseService.listBlocage(request)
      .subscribe(data => {
        this.analysesBlocage = data;
        this.totalElements = data.totalElements;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  nextPage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.search();
  }

  reInit(): void {
    this.notification.showWarnSearch('Remise à zéro', 'Recherche');
  }
}
