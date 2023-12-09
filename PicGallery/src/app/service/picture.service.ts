import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from '../../../../PicGallery/config';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpClient:HttpClient) {
   }

   getAlliamges(){
    return this.httpClient.get(`https://api.unsplash.com/photos/random?client_id=${environment.client_id}`)
   }
}
