import {Component} from '@angular/core';

@Component({
  selector: 'app-overview',
  template: '<div><h1>Overview</h1><p>This page is included in the AppModule.</p></div>',
  styles: ['div { border: 1px dotted darkcyan; background: cyan; padding: 10px; }']
})
export class OverviewComponent {
}
