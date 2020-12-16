import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';
import {PageableGec} from '../interfaces/pageableGec';
import {PageableSge} from '../interfaces/pageableSge';
import {PageableSgo} from '../interfaces/pageableSgo';


@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {
  public analysesSge!: PageableSge;

  constructor(private analyseService: AnalyseService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.analyseService.getAnalyseSge()
      .subscribe(data => {
        this.analysesSge = data;
      });
  }
}
