import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { AnalyseComponent } from './analyse/analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntheseComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
