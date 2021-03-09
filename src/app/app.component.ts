import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '', icon: 'home-outline' },
    { title: 'Créer un nouveau compte', url: 'nouveau', icon: 'person-add-outline' },
    { title: 'Connexion', url: 'connexion', icon: 'person-outline' },
    { title: 'Conversion', url: 'conversion', icon: 'logo-euro' }
  
  ];
 
  constructor() {}
}
