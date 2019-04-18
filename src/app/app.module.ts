import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { SecondComponent } from './second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule,MatFormFieldModule,MatButtonModule,MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,MatFormFieldModule,MatButtonModule,MatInputModule,
    // FormControl,FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
