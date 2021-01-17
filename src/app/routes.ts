import { Error404Component } from './errors/404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostRouteActivator } from './Pages/blog-posts/blogPost-details/blogPost-route-activator.service';
import {
  BlogPostsListComponent,
  BlogPostDetailsComponent,
  CreateBlogPostComponent,
  AlapitvanyComponent,
  BeiratkozasComponent,
  CsengetesiRendComponent,
  DiakonkormanyzatComponent,
  KapcsolatComponent,
  KepgaleriaComponent,
  DokumentumokComponent,
  NevadonkComponent,
  PalyazatokComponent,
  KezdolapComponent
} from './Pages/index';


export const appRoutes: Routes = [
  { path: '', component: KezdolapComponent },
  { path: 'news/new', component: CreateBlogPostComponent, canDeactivate: ['canDeactivateCreateBlogPost'] },
  { path: 'news/:id', component: BlogPostDetailsComponent, canActivate: [BlogPostRouteActivator] },
  { path: 'news', component: BlogPostsListComponent },
  { path: '404', component: Error404Component },
  { path: 'alapitvany', component: AlapitvanyComponent },
  { path: 'beiratkozas', component: BeiratkozasComponent },
  { path: 'dokumentumok', component: DokumentumokComponent },
  { path: 'csengetesi-rend', component: CsengetesiRendComponent },
  { path: 'diakonkormanyzat', component: DiakonkormanyzatComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'kepgaleria', component: KepgaleriaComponent },
  { path: 'nevadonk', component: NevadonkComponent },
  { path: 'palyazatok', component: PalyazatokComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
