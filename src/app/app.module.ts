import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule, ThemeService } from "ng2-charts";
import { LineaComponent } from './components/linea/linea.component';
import { LineasComponent } from './components/lineas/lineas.component';
import { BarraComponent } from './components/barra/barra.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    LineasComponent,
    BarraComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
