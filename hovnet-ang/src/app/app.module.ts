import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from "@angular/router";
import { AppRoutingModule, routingComponent } from './app-routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MatGridListModule } from '@angular/material/grid-list'; 

// mat-nav-list

import { TemplateGComponent } from './template-g/template-g.component';
import { TemplateBComponent } from './template-b/template-b.component';
import { TemplateEComponent } from './template-e/template-e.component';
import { TemplateDComponent } from './template-d/template-d.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home-1/home.component';
import { PirutePorccessComponent } from './pirute-porccess/pirute-porccess.component';
import { ModalComponent } from '././modal/modal.component'
import { TblComponent } from './modal/Tabs/Table/tbl.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { TestimComponent } from './testim/testim.component';
//FooterComponent
//HeadererComponent
  
@NgModule({
  declarations: [
    AppComponent,
    TemplateGComponent,
    TemplateBComponent,
    TemplateEComponent,
    TemplateDComponent,
    NoPageFoundComponent,
    routingComponent,
    LoginComponent,
    HomeComponent,
    PirutePorccessComponent,
    ModalComponent,
    TblComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    TemplateComponent,
    WeeklyComponent,
    TestimComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule,
    MatGridListModule

    // CdkAccordionModule
    // MatDialogRef,
    // MAT_DIALOG_DATA
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }