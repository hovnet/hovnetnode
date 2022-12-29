import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';

import { AppComponent } from './.'
import { TblComponent } from './Table/tbl.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mis1Component } from './mis1/mis1.component';
import { Mis2Component } from './mis2/mis2.component';
import { Mis3Component } from './mis3/mis3.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
    
  declarations: [ 
    AppComponent, 
    Mis1Component, 
    Mis2Component, 
    Mis3Component
    , TblComponent
],
providers: [PostService],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }