import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { CreateComponent } from './create/create.component';
import { ReplaceComponent } from './replace/replace.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowallComponent } from './showall/showall.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CreateComponent,
    ReplaceComponent,
    UpdateComponent,
    DeleteComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
