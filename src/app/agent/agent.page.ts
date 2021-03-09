import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deconnexion() {
    this.router.navigate(["/connexion"]);
  }

}
