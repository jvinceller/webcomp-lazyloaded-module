import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";
import {RouterModule} from "@angular/router";
import {OverviewComponent} from './overview/overview.component';

let globalInjector: Injector;

const routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }, {
    path: 'overview',
    component: OverviewComponent
  }, {
    path: 'detail',
    loadChildren: () => import('./lazyloaded/lazyloaded.module').then(m => m.LazyloadedModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {})
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {
    globalInjector = injector;
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (!customElements.get('my-webcomp')) {
      const myWebcomp = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('my-webcomp', myWebcomp);
    }
  }
}
