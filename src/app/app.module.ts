import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { AnalyseComponent } from './analyse/analyse.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AnalyseService} from './services/analyse.service';
import {CommonModule} from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {path: 'analyse', component: AnalyseComponent},
  {path: 'synthese', component: SyntheseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnalyseComponent,
    SyntheseComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [AnalyseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
