import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { AnalyseComponent } from './analyse/analyse.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: 'analyse', component: AnalyseComponent},
  {path: 'synthese', component: SyntheseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SyntheseComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
