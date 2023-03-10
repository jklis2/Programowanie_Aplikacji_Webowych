import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmallListComponent } from './small-list/small-list.component';
import { MediumListComponent } from './medium-list/medium-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallListComponent,
    MediumListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
