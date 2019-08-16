import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from '@angular/elements';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "viewdetails",
    loadChildren: "app/viewdetails/viewdetails.module#ViewdetailsModule"
  },
  {
    path: "about",
    loadChildren: "app/about/about.module#AboutModule"
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-root', el);
  }
}
