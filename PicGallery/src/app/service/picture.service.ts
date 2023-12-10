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
   allImagesUrl :string =  `http://api.unsplash.com/`

   getSearchedImages(searched:string,pageCount:number){
    return this.httpClient.get(this.baseUrl+`/search/photos?page=${pageCount}&query=${searched}&per_page=30&client_id=${environment.client_id}`);
   }
   // this method will featch 30 images
   getAllIameges(countOfImages:number,pageCount:number){
    console.log("In service  class");
    console.log(countOfImages);
    return this.httpClient.get(`${this.allImagesUrl}/photos?page=${pageCount}&per_page=${countOfImages}&client_id=${environment.client_id}`);
   }

}
