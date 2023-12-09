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
  imagesData:any
  onSearched(searchValue:string){
    this.searchedText = searchValue;
    console.log("In on seach method");

  }


  getAllImages(){
    this.pictureService.getSearchedImages(this.searchedText).subscribe(data=>{
      console.log(data);
    });
  }

}
