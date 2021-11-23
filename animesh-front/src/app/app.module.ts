import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeshHomePageComponent } from './animesh-home-page/animesh-home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { MangaPageComponent } from './manga-page/manga-page.component';
import { NovelPageComponent } from './novel-page/novel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeshHomePageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AnimePageComponent,
    MangaPageComponent,
    NovelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
