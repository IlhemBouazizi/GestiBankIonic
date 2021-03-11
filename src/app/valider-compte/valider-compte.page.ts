import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models';
import { CustomerServiceService } from '../services/customer-service.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-valider-compte',
  templateUrl: './valider-compte.page.html',
  styleUrls: ['./valider-compte.page.scss'],
})
export class ValiderComptePage implements OnInit {
  updatedClient;
  matricule : string;

  constructor(private toastCtrl:ToastController, private service : CustomerServiceService, private router: ActivatedRoute, private MyRoute: Router) { }
  clients: Customer[];
  ngOnInit() {
    this.matricule = this.router.snapshot.params['matricule'];
    console.log(this.matricule);
    this.listeClientAffecter();

  }
  Retour()
  {
      this.MyRoute.navigate(["/agent",this.matricule]);
    }

    public listeClientAffecter(){
      this.service.getClientsAffecter(this.matricule).subscribe(
        response => {
         // console.log(response);
          this.clients = (<Customer[]>response);
  
        }
      );
  }
  valider(form)
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
              statut: "VALIDE",
              agentMatricule: client.agentMatricule,
              typeCompte: client.typeCompte,
              password: client.password,
              role: client.role
            };
        
          //  client.agentMatricule = form.value.agentMatricule;
          console.log(this.updatedClient);

          this.service.updateUser(this.updatedClient).subscribe(response=> {

          
          console.log(this.updatedClient);
        
        //this.presentToast("Client: " + client.prenom + " " + client.name.toUpperCase() +" affecté à l'agent: " + this.client.agentMatricule);
        //  this.refresh();
        }

        
          );

          this.listeClientAffecter();
          this.MyRoute.navigate(["/valider-compte",this.matricule]);
          

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


  }

