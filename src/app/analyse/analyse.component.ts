import {Component, Injectable, OnInit} from '@angular/core';
import {AnalyseService} from '../services/analyse.service';



@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

@Injectable()
export class AnalyseComponent implements OnInit {

  public analyses = Array();

  constructor(private analyseService: AnalyseService) {
  }

  ngOnInit() {
    this.analyseService.getAnalyse()
      .subscribe(data => {
        this.analyses = data;
        console.log(this.analyses);
      });
  }
}
