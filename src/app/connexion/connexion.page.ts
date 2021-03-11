import { Component, OnInit } from '@angular/core';
import { ConnexionPageModule } from './connexion.module';
import { UserService } from '../services/user.service';
import { User } from '../models';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  
  email : string;
  password: string;
  userInfos : User
  constructor(private service : UserService, private router: Router, public toastController: ToastController)
  { }

  ngOnInit() {
  }
  connect(){
    if(this.email!=null && this.password!=null){
      this.service.userConnexion(this.email).subscribe(data =>{
        this.userInfos = <User>data;
        
        if(this.password == this.userInfos.password){
         // console.log("Auth Réussite");
          this.email = "";
          this.password = "";
          switch (this.userInfos.role) {
            case "AGENT":
                console.log(this.userInfos.matricule);
                this.router.navigate(["/agent",this.userInfos.matricule]);
                break;
            case "ADMIN":
            //    console.log("ADMIN");
                this.router.navigate(["/admin"]);
                break;
            case "CLIENT":
             // console.log("CLIENT");
              this.router.navigate(["/client"]);
              break;
          }
         //this.router.navigate([""]]);
        } else {
          this.messageToasted("Votre login ou mot de passe est incorrect");
         // console.log("Mot de passe incorrect !");
        }
        console.log(this.userInfos);
      })

    } else {
      this.messageToasted("Merci de renseigner tous les champs !");
      //console.log("Merci de renseigner tous les champs !")
    }
  
  }
    
  async messageToasted(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
