import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MoviesPage } from '../categories/movies/movies'

import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) {}

    startVideo(strFilename: string) {

      let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Finished Video') },
        errorCallback: (e) => { console.log('Error: ', e) },
        // orientation: 'portrait'
      };

      this.streamingMedia.playVideo('http://10.80.10.250:8200/MediaItems/' + strFilename , options );

    }

    goMoviesPage(){
      this.navCtrl.push(MoviesPage);
    }

}
