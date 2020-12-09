import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';
import {Analyse} from '../interfaces/analyse';


@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {
  public analyses: Analyse[] = [];

  constructor(private analyseService: AnalyseService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.analyseService.getAnalyse()
      .subscribe(data => {
        this.analyses = data;
      });
  }
}
