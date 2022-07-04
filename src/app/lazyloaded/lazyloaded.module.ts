import {NgModule} from "@angular/core";
import {DetailComponent} from "./detail.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadedModule {
}
