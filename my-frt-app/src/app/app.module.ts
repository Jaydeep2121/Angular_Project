import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from '../basic-highlight/highlight.directive';
import { BetterhighlightDirective } from './better-highlight/betterhighlight.directive';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterhighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
