import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {
  matricule : string;
 
  constructor(private router: ActivatedRoute, private MyRoute: Router) { }

  ngOnInit() {
    this.matricule = this.router.snapshot.params['matricule'];
    console.log(this.matricule);    
  }

  deconnexion() {
    this.MyRoute.navigate(["/connexion"]);
  }
  ValiderCompte()
  {
    console.log(this.matricule);
    this.MyRoute.navigate(["/valider-compte",this.matricule]);
  }
}
