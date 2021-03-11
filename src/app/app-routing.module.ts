import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'nouveau',
    loadChildren: () => import('./nouveau-compte/nouveau-compte.module').then( m => m.NouveauComptePageModule)
  },
  {
    path: 'conversion',
    loadChildren: () => import('./conversion/conversion.module').then( m => m.ConversionPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'new-agent',
    loadChildren: () => import('./new-agent/new-agent.module').then( m => m.NewAgentPageModule)
  },
  {
    path: 'liste-agents',
    loadChildren: () => import('./liste-agents/liste-agents.module').then( m => m.ListeAgentsPageModule)
  },
  {
    path: 'liste-demande-creation-compte',
    loadChildren: () => import('./liste-demande-creation-compte/liste-demande-creation-compte.module').then( m => m.ListeDemandeCreationComptePageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]






  
})
export class AppRoutingModule {}
