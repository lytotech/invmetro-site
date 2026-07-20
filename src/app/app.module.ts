import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { TableCuritibaComponent } from './table-curitiba/table-curitiba.component';
import { TableCampoLargoComponent } from './table-campo-largo/table-campo-largo.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { TrackClickDirective } from './shared/analytics/track-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ServicosComponent,
    TableCuritibaComponent,
    TableCampoLargoComponent,
    SobreComponent,
    FaqComponent,
    ContatoComponent,
    TrackClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
