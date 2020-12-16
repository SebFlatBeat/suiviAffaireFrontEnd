import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';
import {PageableBlocage} from '../interfaces/pageableBlocage';



@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {
  public analysesBlocage!: PageableBlocage;

  constructor(private analyseService: AnalyseService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.analyseService.getAnalyse()
      .subscribe(data => {
        this.analysesBlocage = data;
      });
  }
}
