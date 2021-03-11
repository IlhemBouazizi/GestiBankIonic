import { Component, OnInit } from '@angular/core';
import { NouveauComptePageRoutingModule } from './nouveau-compte-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Customer } from '../models';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-compte',
  templateUrl: './nouveau-compte.page.html',
  styleUrls: ['./nouveau-compte.page.scss'],
})
export class NouveauComptePage implements OnInit {

client : Customer;

customer : Customer;
nom: string;
prenom : string;
phone : string;
mail : string;
compte: string;

  constructor(
    private service : CustomerServiceService, private router : Router, public toastController: ToastController) { }

  ngOnInit() {
  }
  CustomerCreation(){
    if(this.mail!=null && this.nom!=null  && this.phone!=null && this.prenom!=null && this.compteSelected()){
      this.customer = {
      name: this.nom,
      prenom: this.prenom,
      tel: this.phone,
      email: this.mail,
      role: "CLIENT",
      statut: "ATTENTE",
      typeCompte: this.compteSelected(),
      password: this.nom + this.random(),
     
    }
    this.service.postCustomer(this.customer).subscribe(
      response => {
        console.log(response)
        this.messageToasted("Client ajouté avec succès !");
        this.router.navigate(["/client"]);
      this.nom="",
      this.mail="",
      this.phone="",
      this.prenom=""
     
      }
    )
    }
    else {
    this.messageToasted("Veuillez compléter de remplir tous le champs !");
  }
  }
  compteSelected(){
    return this.compte;
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
