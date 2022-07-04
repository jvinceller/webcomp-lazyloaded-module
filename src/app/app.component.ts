import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(location.pathname);
    console.log(this.activatedRoute.snapshot.url);
    console.log(this.router.url)

    activatedRoute.url.subscribe(url => {
      console.log(url);
    })

    if (!activatedRoute.snapshot.component) {
      router.navigateByUrl(location.pathname);
    }
  }

  loadModule() {
    this.router.navigate(['detail', 3]);
  }
}
