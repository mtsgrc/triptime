import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MediaConsultant } from  '../../providers/mediaConsultant';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  public strSearch: string = '';
  public strResponse: string = '';
  public searching: boolean = false;

  constructor( public navCtrl: typeof NavController, public loadingCtrl: typeof LoadingController , public mediaConsultant: MediaConsultant ) { }

  showSpinner(){ this.searching = true ; }
  hideSpinner(){ this.searching = false ; }

  filterItems() {
    this.showSpinner();
    
    this.mediaConsultant.searchMedia( {'mediaType': "audio", 'keyword': this.strSearch } ).then( response => { 
      this.hideSpinner();
      this.strResponse = response.data ;
      console.log( response.data.replace(/(&lt;)/g,"<").replace(/(&gt;)/g,">") );
    } ).catch( error => { 
      this.hideSpinner();
      this.strResponse = error ;
    } );
    
  }
  
}
