import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';
import {PageableBlocage} from '../interfaces/pageableBlocage';
import {Blocage} from '../interfaces/blocage';
import {AppService} from '../services/app.service';
import {LoginComponent} from '../login/login.component';
import {NotificationService} from '../services/notification.service';



@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {
  public analysesBlocage!: PageableBlocage;

  constructor(private analyseService: AnalyseService, private login: LoginComponent, private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.analyseService.getAnalyse()
      .subscribe(data => {
        let tab: Blocage [] = [];
        tab = tab.concat(data.content.filter(x => x.blocageSource === 'nonTraite'));
        tab = tab.concat(data.content.filter(x => x.blocageSource !== 'nonTraite'));
        data.content = tab;
        this.analysesBlocage = data;
      });
  }

  onChange(value: any, id: number): void {
    this.analyseService.putBlocage(id, value, this.login.usernameSession).subscribe();
    if (value !== 'nonTraite'){
    this.notification.showSuccessPut('Vous avez choisi(e) ' + value, 'Choix du blocage');
    }else {
      this.notification.showWarnPut('Vous avez choisi(e) ne pas traiter', 'Choix du blocage');
    }
  }
}
