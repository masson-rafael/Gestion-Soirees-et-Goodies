import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoireesComponent } from './soirees/soirees.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { GoodiesComponent } from './goodies/goodies.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewGoodieComponent } from './new-goodie/new-goodie.component';

const routes: Routes = [
  { path: '', component: SoireesComponent },
  { path: 'soirees', component: SoireesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'reservations/new/:id', component: NewReservationComponent },
  { path: 'goodies', component: GoodiesComponent },
  { path: 'goodies/new', component: NewGoodieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
