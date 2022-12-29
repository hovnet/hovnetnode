import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateGComponent } from './template-g/template-g.component';
import { TemplateBComponent } from './template-b/template-b.component';
import { TemplateEComponent } from './template-e/template-e.component';
import { TemplateDComponent } from './template-d/template-d.component';
import { TemplateComponent } from './template/template.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WeeklyComponent } from './weekly/weekly.component';
//
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from '../app/login/login.component';
import { PirutePorccessComponent } from './pirute-porccess/pirute-porccess.component';
import { HomeComponent } from './home-1/home.component';
import { AuthGuard } from '../app/_helpers/auth_guard';
import { TestimComponent } from './testim/testim.component';

 const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: '', redirectTo: '/TEN', pathMatch: 'full' },
  //  { path: 'login', component: LoginComponent },
  // { path: 'TEN', component: LoginComponent },
    { path: 'TG', component: TemplateGComponent },
    { path: 'TB', component: TemplateBComponent },
    { path: 'TE', component: TemplateEComponent },
    { path: 'TD', component: TemplateDComponent },
    { path: 'TEN', component: LoginComponent },
    { path: 'CHK', component: PirutePorccessComponent },
    { path: 'SD', component: SidenavComponent },
    { path: 'TST', component: TemplateComponent },
    { path: 'W17/:id', component: WeeklyComponent },
    { path: 'Test', component: TestimComponent },
    { path: '**', component: NoPageFoundComponent }
  //  { path: '**', component: LoginComponent }
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 export const routingComponent = [TemplateGComponent,
                                 TemplateBComponent,
                                 TemplateEComponent,
                                 TemplateDComponent,
                                 LoginComponent,
                                 PirutePorccessComponent,
                                 SidenavComponent,
                                 WeeklyComponent,
                                 TestimComponent
                                 ]