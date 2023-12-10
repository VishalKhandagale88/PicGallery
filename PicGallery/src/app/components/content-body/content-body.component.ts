import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/service/picture.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {
  constructor(private pictureService:PictureService ){

  }
  ngOnInit(): void {
    this.pictureService.getAllIameges().subscribe(data=>{
      this.imagesData = data;
      console.log(data);
    });
  }
  searchedText:string="";
  imagesData:any;
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
