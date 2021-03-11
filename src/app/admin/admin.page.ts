import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  PageNewAgent() {
    this.router.navigate(["/new-agent"]);
  }
  deconnexion() {
    this.router.navigate(["/connexion"]);
  }
  ListeAgentsPage() {
    this.router.navigate(["/liste-agents"]);
  }
  ConsulterDemandes(){
    this.router.navigate(["/liste-demande-creation-compte"]);
  }

}
