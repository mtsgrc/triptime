import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

// import { CloudModule, CloudSettings } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { SearchPage } from '../pages/search/search';
import { PollPage } from '../pages/poll/poll';
import { MoviesPage } from '../pages/categories/movies/movies'

import { MediaConsultant } from '../providers/mediaConsultant';
import { Film } from '../providers/film'

import { FilmDetailPage } from '../pages/film-detail/film-detail';
import { Ionic2RatingModule } from 'ionic2-rating';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

import { Http } from '@angular/http';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { HttpClientModule } from '@angular/common/http';


// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '6dc8f9ab'
//   }
// };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    CategoriesPage,
    SearchPage,
    PollPage,
    FilmDetailPage,
    MoviesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    TranslateModule.forRoot({
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    CategoriesPage,
    SearchPage,
    PollPage,
    FilmDetailPage,
    MoviesPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Film, 
    StreamingMedia,
    MediaConsultant
  ]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
