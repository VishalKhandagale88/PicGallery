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
   otherUrl :string =  `http://api.unsplash.com/photos?per_page=30&client_id=${environment.client_id}`

   getSearchedImages(searched:string){
    return this.httpClient.get(this.baseUrl+`&query=${searched}`);
   }
   // this method will featch 30 images
   getAllIameges(){
    console.log("Exicuting get all images method");
    return this.httpClient.get(this.otherUrl);
   }

}
