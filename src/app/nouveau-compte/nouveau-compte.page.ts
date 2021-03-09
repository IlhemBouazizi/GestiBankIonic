import { Component, OnInit } from '@angular/core';
import { NouveauComptePageRoutingModule } from './nouveau-compte-routing.module';
import { CustomerServiceService } from '../services/customer-service.service';
import { Customer } from '../models';

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
    private service : CustomerServiceService, private router : NouveauComptePageRoutingModule) { }

  ngOnInit() {
  }

  CustomerCreation(){
      this.customer = {
      name: this.nom,
      prenom: this.prenom,
      tel: this.phone,
      email: this.mail,
      role: "CLIENT",
      statut: "ATTENTE",
      typeCompte: this.compteSelected(),
      password: " ",
    }

    this.service.postCustomer(this.customer).subscribe(
      response => {
        console.log(response)
      
      }
    )

  }

  compteSelected(){
    return this.compte;
  }

}
