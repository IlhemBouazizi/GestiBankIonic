import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Créer un nouveau compte', url: '/folder/NouveauCompte', icon: 'person-add-outline' },
    { title: 'Connexion', url: '/folder/Connexion', icon: 'person-outline' },
    { title: 'Conversion', url: '/folder/Conversion', icon: 'logo-euro' },
  ];
 
  constructor() {}
}
