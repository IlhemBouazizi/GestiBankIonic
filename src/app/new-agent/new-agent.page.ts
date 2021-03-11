import { Component, OnInit } from '@angular/core';
import { Agent } from '../models';
import { NewAgentPageRoutingModule } from './new-agent-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.page.html',
  styleUrls: ['./new-agent.page.scss'],
})
export class NewAgentPage implements OnInit {
  agent : Agent;

  nom: string;
  prenom : string; 
  phone : number;
  mail : string; 
  constructor(private service : CustomerServiceService, private router : NewAgentPageRoutingModule, private router2: Router, public toastController: ToastController) { }

  ngOnInit() {
  }
  NewAgent(){
    if(this.mail!=null && this.nom!=null  && this.phone!=null && this.prenom!=null){
    this.agent = {
    name: this.nom,
    prenom: this.prenom,
    tel: this.phone,
    email: this.mail,
    role: "AGENT",
    password: this.nom + this.random(),
    matricule: this.nom + this.random(),
  }
 this.service.postAgent(this.agent).subscribe(
      response => {
        console.log(response)
        this.messageToasted("Agent ajouté avec succès !");
        this.router2.navigate(["/liste-agents"]);  
      }
    )
  }
  else {
    this.messageToasted("Veuillez compléter de remplir tous le champs !");
  }
}
  async messageToasted(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
 
  
  random(): number {
    let rand = Math.floor(Math.random()*20)+1;
    return rand;       
 }

}
