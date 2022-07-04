import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-detail',
  template: '<div><h1>Detail</h1><p>Lazy loaded detail component. Here\'s the detail: {{ id$ | async }}</p><button (click)="back()">Back</button></div>',
  styles: ['div { border: 1px dotted darkcyan; background: cyan; padding: 10px; }']
})
export class DetailComponent {
  id$ = new BehaviorSubject<string>('');

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id$.next(params['id']);
    });
  }

  back() {
    this.router.navigate(['overview'], {replaceUrl: true});
  }
}
