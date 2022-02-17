import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCreateComponent } from 'src/components/customer-create/customer-create.component';
import { PollutantCreateComponent } from 'src/components/pollutant-create/pollutant-create.component';
import { RootComponent } from 'src/components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    PollutantCreateComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent, RootComponent]
})
export class AppModule { }
