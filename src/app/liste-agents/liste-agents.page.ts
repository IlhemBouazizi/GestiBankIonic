import { Component, OnInit } from '@angular/core';
import { Agent } from '../models';
import { ListeAgentsPageRoutingModule } from './liste-agents-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-agents',
  templateUrl: './liste-agents.page.html',
  styleUrls: ['./liste-agents.page.scss'],
})
export class ListeAgentsPage implements OnInit {

  agents: Agent[];
  constructor(private service : CustomerServiceService, private router: Router, private router2: ListeAgentsPageRoutingModule ) { }

  ngOnInit(): void {
    this.refresh();
  }
 /* public delete(agent) {
    alert("Voulez vous vraiment supprimer : "+ agent.name);

    this.service.deleteAgent(agent.matricule).subscribe(
      response => {
        this.refresh();
      }
    );

  }*/
  
  public refresh() { 
    this.service.getAgents().subscribe(
      response => {
        console.log(response);
        this.agents = (<Agent[]>response);
      }
    );
  }
/*
  public update(agent) { 
    this.router.navigate(["/"+agent.email +""]);
  }
*/
}


