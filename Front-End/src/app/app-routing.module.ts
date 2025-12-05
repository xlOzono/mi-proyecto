import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { TallerComponent } from './taller/taller.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'taller3', component: TallerComponent },
  { path: '', redirectTo: '/proyecto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
