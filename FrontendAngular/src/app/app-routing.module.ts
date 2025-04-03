import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoireesComponent } from './soirees/soirees.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GoodiesComponent } from './goodies/goodies.component';

const routes: Routes = [
  { path: '', component: SoireesComponent },
  { path: 'soirees', component: SoireesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'goodies', component: GoodiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
