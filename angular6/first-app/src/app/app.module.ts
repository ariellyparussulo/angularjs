import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './folder/serve.component';
import { ServersComponent } from './servers/servers.component';
import { ManualComponent } from './manual/manual.component';
import { AutoComponent } from './auto/auto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ManualComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
