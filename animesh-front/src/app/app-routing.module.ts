import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeshHomePageComponent } from './animesh-home-page/animesh-home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MangaPageComponent } from './manga-page/manga-page.component';
import { NovelPageComponent } from './novel-page/novel-page.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
const routes: Routes = [
  {path:'',component:AnimeshHomePageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'manga',component:MangaPageComponent},
  {path:'novel',component:NovelPageComponent},
  {path:'anime',component:AnimePageComponent},
  {path:'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
