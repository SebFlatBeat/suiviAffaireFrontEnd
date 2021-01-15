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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SyntheseService} from './services/synthese.service';
import {CardsModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularMaterialModule} from './angular-material.module';
import {LoginService} from './services/login.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegisterService} from './services/register.service';
import {AppService} from './services/app.service';
import {ToastrModule} from 'ngx-toastr';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: 'login', component: LoginComponent},
  {path: 'register', canActivate: [AppService], component: RegisterComponent},
  {path: 'analyse', canActivate: [AppService], component: AnalyseComponent},
  {path: 'synthese', canActivate: [AppService], component: SyntheseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
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
    ToastrModule.forRoot({
      timeOut: 1750,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [AnalyseService, SyntheseService, LoginService, RegisterService, AppService, LoginComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
