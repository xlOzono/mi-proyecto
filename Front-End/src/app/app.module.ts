import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TallerComponent } from './taller/taller.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TallerComponent,
    NavbarComponent,
    ProyectoComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
