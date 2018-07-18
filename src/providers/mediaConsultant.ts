export const voyagerIPAddress = "10.80.10.250";
export const voyagerDLNAPort = "8200";
export const voyagerDLNAURI_Browser = "http://" + voyagerIPAddress + ":" + voyagerDLNAPort + "/ctl/ContentDir";

export const voyagerRESTPort = "50000";
export const voyagerRESTURI_Browser = "http://" + voyagerIPAddress + ":" + voyagerDLNAPort + "/api/DETAILS";

// import { HTTP } from '@ionic-native/http';
// import { pluginWarn } from '@ionic-native/core';
import { HttpClient } from '@angular/common/http';


export class MediaConsultant  {
  
    /*
    static get parameters() {
      return [[Http]];
    }
    */
    constructor( private http: typeof HttpClient ) {}
    
    searchMedia( options: {} ): any {

      var strMediaType: string = ( options.hasOwnProperty("media_type") ? '' : '' ) ;
      var strKeyword: string = ( options.hasOwnProperty("keyword") ? '' : '' ) ;

      var url_params: any = { "filters": [ 
        { "name": "TITLE", "val": "%" + strMediaType + "%" , "op" : "like"} 
      ]};

      
      console.log( voyagerRESTURI_Browser + "?q=" + JSON.stringify( url_params ) );

      this.http.get( voyagerRESTURI_Browser ).subscribe(data => {
        console.log(data);
      });

      // Make request to URI
      /*
      return this.http.post( voyagerRESTURI_Browser , null , null )
      .then( response => {

        console.log( " >> OK STATUS:" + response.status );
        console.log( " >> OK DATA:" + response.data );
          
        return response ;

      } ).catch( error => {

        console.log( " >> ERROR STATUS:" + error.status );
        console.log( " >> ERROR MESSAGE:" + error.error );
        return error ;

      } );
      */
    }

}
