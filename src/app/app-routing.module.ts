import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home', loadComponent: () => import('./components/advertpage/advertpage.component').then(h => h.AdvertpageComponent) },
{path:'SignUp', loadComponent: () => import('./components/signup/signup.component').then(j => j.SignupComponent ) },
{path:'Login', loadComponent: () => import('./components/login/login.component').then(k => k.LoginComponent) },

{path:'public', loadComponent: () => import('./components/functionality/public/public.component').then(k => k.PublicComponent), children:[
  {
    path: 'public',
    loadComponent: () =>
      import('./components/functionality/questions/show-all-questions/show-all-questions.component').then((p) => p.ShowAllQuestionsComponent),
    pathMatch: 'full',
  },
  {path:'allQuestions', loadComponent: () => import('./components/functionality/questions/show-all-questions/show-all-questions.component').then(k => k.ShowAllQuestionsComponent) },
  {path:'askQuestion', loadComponent: () => import('./components/functionality/questions/ask-question/ask-question.component').then(k => k.AskQuestionComponent)},
  {path:'singleQuestion/:id', loadComponent: () => import('./components/functionality/questions/single-question/single-question.component').then(k => k.SingleQuestionComponent)},
  {path:'tags', loadComponent: () => import('./components/functionality/tags/tags.component').then(k => k.TagsComponent )},
  {path:'users', loadComponent: () => import('./components/functionality/users/users.component').then(k => k.UsersComponent )},
  {path:'profile', loadComponent: () => import('./components/functionality/users/profile/profile.component').then(k => k.ProfileComponent )},
] },
{path:'admin', loadComponent: () => import('./admin-dashboard/home/home.component').then(k => k.HomeComponent), children:[
  {
    path: 'users',
    loadComponent: () =>
      import('./admin-dashboard/home/users-dashboard/users-dashboard.component').then((p) => p.UsersDashboardComponent),
    pathMatch: 'full',
  },
  {path:'users', loadComponent: () => import('./admin-dashboard/home/users-dashboard/users-dashboard.component').then(k => k.UsersDashboardComponent),pathMatch: 'full', },
  {path:'posts', loadComponent: () => import('./admin-dashboard/home/posts-dashboard/posts-dashboard.component').then(k => k.PostsDashboardComponent) },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
