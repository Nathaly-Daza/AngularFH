import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CformComponent } from './cform/cform.component';
import { CcourseComponent } from './ccourse/ccourse.component';
import { FormsModule } from '@angular/forms';
import { CnosotrosComponent} from './cnosotros/cnosotros.component';
import { CdireccionComponent } from './cdireccion/cdireccion.component';
import { ClistaComponent } from './clista/clista.component';
import { ContadorComponent } from './contador/contador.component';
import { MinComponent } from './contador/min/min.component';
import { AddComponent } from './contador/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    CfooterComponent,
    CheaderComponent,
    CformComponent,
    CcourseComponent,
    CnosotrosComponent,
    CdireccionComponent,
    ClistaComponent,
    ContadorComponent,
    MinComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
