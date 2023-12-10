import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { PictureService } from 'src/app/service/picture.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {
  constructor(private pictureService:PictureService ){
  }
  imageArray: any;
  // image array where all the images are stored
  imagesData:any[]=[];
  
  imagesCount=30;
  ngOnInit(): void {
    this.pictureService.getAllIameges(this.imagesCount).subscribe(data=>{
      console.log(data);
      this.imageArray=data
      this.imagesData.push(...this.imageArray);
    });
    console.log(this.imagesData);
  }
  searchedText:string="";

  numberOfImages:number | undefined;
  onSearched(searchValue:string){
    this.searchedText = searchValue;
    this.searchedImages();
  }
  //storing search respone here
  searchResponse:any;

  searchedImages(){
    this.pictureService.getSearchedImages(this.searchedText).subscribe(data=>{
      this.searchResponse=data;
      this.imagesData=this.searchResponse.results
      this.numberOfImages = this.imagesData.length;
    });
  }

  // when hover on card this things going to happen
  showDetails(image: any): void {
    image.showDetails = true;
  }

  hideDetails(): void {
    this.imagesData.forEach((image: { showDetails: boolean; }) => (image.showDetails = false));
  }




}
