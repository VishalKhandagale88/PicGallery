import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from '../../../../PicGallery/config';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpClient:HttpClient) {
   }
   baseUrl:string=`https://api.unsplash.com/`
   allImagesUrl :string =  `http://api.unsplash.com/photos?per_page=30&client_id=${environment.client_id}`

   getSearchedImages(searched:string){
    return this.httpClient.get(this.baseUrl+`/search/photos?query=${searched}&per_page=30&client_id=${environment.client_id}`);
   }
   // this method will featch 30 images
   getAllIameges(){
    return this.httpClient.get(this.allImagesUrl);
   }

}
