import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from './clients';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.css']
})
export class FormClientsComponent implements OnInit {

  client:Clients = new Clients();
  titulo:string="Register Clients";

  constructor(private clientServices:ClientsService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.client);
    this.clientServices.create(this.client).subscribe(
      res=>this.router.navigate(['/clients'])
    );
  }

}
