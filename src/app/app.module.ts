import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './common/services/toastr.service';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { KezdolapComponent } from './Pages/kezdolap/kezdolap.component';
import { AlapitvanyComponent } from './Pages/alapitvany/alapitvany.component';
import { BeiratkozasComponent } from './Pages/beiratkozas/beiratkozas.component';
import { CsengetesiRendComponent } from './Pages/csengetesi-rend/csengetesi-rend.component';
import { DiakonkormanyzatComponent } from './Pages/diakonkormanyzat/diakonkormanyzat.component';
import { KapcsolatComponent } from './Pages/kapcsolat/kapcsolat.component';
import { KepgaleriaComponent } from './Pages/kepgaleria/kepgaleria.component';
import { DokumentumokComponent } from './Pages/dokumentumok/dokumentumok.component';
import { NevadonkComponent } from './Pages/nevadonk/nevadonk.component';
import { IntezmenyegysegekComponent } from './Pages/intezmenyegysegek/intezmenyegysegek.component';
import { VezetosegComponent } from './Pages/vezetoseg/vezetoseg.component';
import { PalyazatokComponent } from './Pages/palyazatok/palyazatok.component';
import { SzakkorokComponent } from './Pages/szakkorok/szakkorok.component';
import { EtkezesComponent } from './Pages/etkezes/etkezes.component';
import { EsemenynaptarComponent } from './Pages/esemenynaptar/esemenynaptar.component';

import { BlogPostRouteActivator } from './Pages/blog-posts/blogPost-details/blogPost-route-activator.service';
import { BlogService } from './Pages/blog-posts/shared/blog.service';
import { BlogPostsListComponent } from './Pages/blog-posts/blogPosts-list.component';
import { BlogPostThumbnailComponent } from './Pages/blog-posts/blogPost-thumbnail.component';
import { BlogPostDetailsComponent } from './Pages/blog-posts/blogPost-details/blogPost-details.component';
import { CreateBlogPostComponent } from './Pages/blog-posts/create-blogPost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KezdolapComponent,
    AlapitvanyComponent,
    BeiratkozasComponent,
    CsengetesiRendComponent,
    DiakonkormanyzatComponent,
    KapcsolatComponent,
    KepgaleriaComponent,
    DokumentumokComponent,
    NevadonkComponent,
    IntezmenyegysegekComponent,
    VezetosegComponent,
    PalyazatokComponent,
    SzakkorokComponent,
    EtkezesComponent,
    EsemenynaptarComponent,
    CreateBlogPostComponent,
    BlogPostsListComponent,
    BlogPostThumbnailComponent,
    BlogPostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    AuthService,
    BlogService,
    NotificationService,
    BlogPostRouteActivator,
    { provide: 'canDeactivateCreateBlogPost', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateBlogPostComponent) {
  if (component.isDirty)
    return window.confirm('Nem mentett változtatásaid vannak. Tényleg el akarod hagyni az oldalt?');
  return true;
}