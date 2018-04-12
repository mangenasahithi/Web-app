import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { MynComponent } from './myn/myn.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import {PerService} from './per.service';

@NgModule({
  declarations: [
    AppComponent,
    MynComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
