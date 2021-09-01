import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { FormClientsComponent } from './clients/form-clients.component';

const routes:Routes=[
  {path:'', redirectTo:'/clients', pathMatch:'full'},
  {path:'clients', component:ClientsComponent},
  {path:'clients/form', component:FormClientsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FormClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
