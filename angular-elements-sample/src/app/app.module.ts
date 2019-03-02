import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    //Declares our component's Custom Element
    //Then defines it in the DOM so it can be used in other projects
    const buttonElement = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('custom-button', buttonElement);
  }
}
