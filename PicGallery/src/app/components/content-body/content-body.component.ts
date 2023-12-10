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
    this.pictureService.getAllIameges(30,this.imagesCount).subscribe(data=>{
      this.imageArray=data
      this.imagesData.push(...this.imageArray);
    });
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
    this.pictureService.getSearchedImages(this.searchedText,1).subscribe(data=>{
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

  // method to load more images
  currentPage = 1;
  perPage = 30; // Adjust as needed
  onScroll(): void {
    // Assuming you have a method to detect scrolling and trigger this event
    this.currentPage++;
    this.pictureService.getAllIameges(this.perPage,this.currentPage).subscribe(data=>{
      if(this.searchedText===""){
        this.imageArray=data;
        this.imagesData.push(...this.imageArray);
      }else{
        this.pictureService.getSearchedImages(this.searchedText,this.currentPage).subscribe(data=>{
          this.searchResponse=data;
          // this.imagesData=this.searchResponse.results
          // this.numberOfImages = this.imagesData.length;
          console.log(this.imagesData);
          console.log("seach response");
          this.imagesData.push(...this.searchResponse.results)
          console.log(this.imagesData);
        });
      }
    });
  }

}
