import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {  constructor(private injector: Injector) {

}
ngDoBootstrap() {
  const el = createCustomElement(AboutComponent, {injector: this.injector});
  customElements.define('about-root', el);
}
}
