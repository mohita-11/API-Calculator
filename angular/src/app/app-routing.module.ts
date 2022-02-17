import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from '../components/customer-create/customer-create.component';
import { PollutantCreateComponent } from '../components/pollutant-create/pollutant-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customer-create' },
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'pollutant-create', component: PollutantCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
