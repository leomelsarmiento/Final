import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-login',
    loadChildren: () => import('./page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: 'page-signup',
    loadChildren: () => import('./page-signup/page-signup.module').then( m => m.PageSignupPageModule)
  },
  {
    path: 'page-content',
    loadChildren: () => import('./page-content/page-content.module').then( m => m.PageContentPageModule)
  },
  {
    path: 'page-inbox',
    loadChildren: () => import('./page-inbox/page-inbox.module').then( m => m.PageInboxPageModule)
  },
  {
    path: 'page-main',
    loadChildren: () => import('./page-main/page-main.module').then( m => m.PageMainPageModule)
  },
  {
    path: 'page-outbox',
    loadChildren: () => import('./page-outbox/page-outbox.module').then( m => m.PageOutboxPageModule)
  },
  {
    path: 'page-notification',
    loadChildren: () => import('./page-notification/page-notification.module').then( m => m.PageNotificationPageModule)
  },
  {
    path: 'page-certificate',
    loadChildren: () => import('./page-certificate/page-certificate.module').then( m => m.PageCertificatePageModule)
  },
  {
    path: 'page-course',
    loadChildren: () => import('./page-course/page-course.module').then( m => m.PageCoursePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
