import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NewpipePipe } from './newpipe.pipe';
import { TestComponent } from './test/test.component';
import { AngpipePipe } from './angpipe.pipe';
import { FormComponent } from './form/form.component';
import { AllComponent } from './all/all.component';
import { PipecPipe } from './pipec.pipe';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    TableComponent,
    NewpipePipe,
    TestComponent,
    AngpipePipe,
    FormComponent,
    AllComponent,
    PipecPipe,
    NavComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
