import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEmpresaComponent } from './app-empresa/app-empresa.component';
import { DashboardComponent } from './app-empresa/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEmpresaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppEmpresaComponent]
})
export class AppModule { }
