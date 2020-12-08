import { Component } from '@angular/core';
import {AnalyseService} from './analyse.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private analyseService: AnalyseService) {
  }
  title = 'Suivi des Affaires';
}
