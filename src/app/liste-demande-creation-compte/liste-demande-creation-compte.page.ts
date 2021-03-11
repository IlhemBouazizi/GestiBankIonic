import { Component, OnInit } from '@angular/core';
import { Customer } from '../models';
import { Agent } from '../models';
import { ListeDemandeCreationComptePageRoutingModule} from './liste-demande-creation-compte-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-demande-creation-compte',
  templateUrl: './liste-demande-creation-compte.page.html',
  styleUrls: ['./liste-demande-creation-compte.page.scss'],
})
export class ListeDemandeCreationComptePage implements OnInit {
  agentSelect: Agent;
  agents: Agent[];
  clients: Customer[];
  constructor(private service : CustomerServiceService, private router: Router, private router2: ListeDemandeCreationComptePageRoutingModule ) { }

  ngOnInit(): void {
    this.refresh();
    this.listeAgents();
  }
  public refresh() { 
    this.service.getClientsAttentes().subscribe(
      response => {
        console.log(response);
        this.clients = (<Customer[]>response);
      }
    );
  }
  public listeAgents(){
    this.service.getAgents().subscribe(
      response => {
        console.log(response);
        this.agents = (<Agent[]>response);

      }
    );
}
}
