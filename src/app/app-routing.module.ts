import { EtudeInvestComponent } from './service/etude-invest/etude-invest.component';
import { LocationMaterielComponent } from './service/location-materiel/location-materiel.component';
import { EtudeAgricolComponent } from './service/etude-agricol/etude-agricol.component';
import { ConsultationComponent } from './service/consultation/consultation.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'service/consultation',
    component: ConsultationComponent,
  },
  {
    path: 'service/etude-agricol',
    component: EtudeAgricolComponent,
  },
  {
    path: 'service/location-materiel',
    component: LocationMaterielComponent,
  },
  {
    path: 'service/etude-invest',
    component: EtudeInvestComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
