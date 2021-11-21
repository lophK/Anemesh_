import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeshHomePageComponent } from './animesh-home-page/animesh-home-page.component';
const routes: Routes = [
  {path:'',component:AnimeshHomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
