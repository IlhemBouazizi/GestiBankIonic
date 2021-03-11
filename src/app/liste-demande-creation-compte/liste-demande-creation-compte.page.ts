import { Component, OnInit } from '@angular/core';
import { Customer } from '../models';
import { Agent } from '../models';
import { ListeDemandeCreationComptePageRoutingModule} from './liste-demande-creation-compte-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liste-demande-creation-compte',
  templateUrl: './liste-demande-creation-compte.page.html',
  styleUrls: ['./liste-demande-creation-compte.page.scss'],
})
export class ListeDemandeCreationComptePage implements OnInit {
updatedClient;
  client: Customer;
  agents: Agent[];
  clients: Customer[];
  constructor(private toastCtrl:ToastController, private service : CustomerServiceService, private router: Router, private router2: ListeDemandeCreationComptePageRoutingModule ) { }

  ngOnInit(): void {
    this.refresh();
    this.listeAgents();
  }
  public refresh() { 
    this.service.getClientsAttentes().subscribe(
      response => {
     //   console.log(response);
        this.clients = (<Customer[]>response);
      }
    );
    
  }
  public listeAgents(){
    this.service.getAgents().subscribe(
      response => {
       // console.log(response);
        this.agents = (<Agent[]>response);

      }
    );
}
affecter(form)
{
      //if (form.value.agentMatricule){
        //console.log("1");
         this.service.getUser(form.value.email).subscribe(
         (client: Customer) => 
        
         {
          
           this.updatedClient = {
            name: client.name,
            prenom: client.prenom,
            tel: client.tel,
            email: client.email,
            statut: client.statut,
            agentMatricule: form.value.agentMatricule,
            typeCompte: client.typeCompte,
            password: client.password,
            role: client.role
          };
      
        //  client.agentMatricule = form.value.agentMatricule;
         // console.log("ok" +this.updatedClient);

        this.service.updateUser(this.updatedClient).subscribe(response=> {

        
       // console.log(this.updatedClient);
      
      this.presentToast("Client: " + client.prenom + " " + client.name.toUpperCase() +" affecté à l'agent: " + this.client.agentMatricule);
      //  this.refresh();
      }
        );

        this.refresh();
    this.listeAgents();

        this.router.navigate(["/liste-demande-creation-compte"]);
    });
  //  )} //else {

      //this.presentToast("Veuillez choisir un agent");
   // }

  }  
  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  
  Retour(){
    this.router.navigate(["/admin"]);
  }
}
