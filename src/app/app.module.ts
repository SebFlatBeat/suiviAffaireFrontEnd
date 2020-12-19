import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SyntheseComponent} from './synthese/synthese.component';
import {AnalyseComponent} from './analyse/analyse.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AnalyseService} from './services/analyse.service';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SyntheseService} from './services/synthese.service';
import {CardsModule} from 'angular-bootstrap-md';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularMaterialModule} from './angular-material.module';
import {RegisterComponent} from './register/register.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'analyse', component: AnalyseComponent},
  {path: 'synthese', component: SyntheseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnalyseComponent,
    SyntheseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    ChartsModule,
    CardsModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [AnalyseService, SyntheseService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
