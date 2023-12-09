import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from '../../../../PicGallery/config';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpClient:HttpClient) {
   }
   baseUrl:string=`https://api.unsplash.com/photos/random?client_id=${environment.client_id}`

   getSearchedImages(searched:string){
    return this.httpClient.get(this.baseUrl+`&query=${searched}`);
   }

}
