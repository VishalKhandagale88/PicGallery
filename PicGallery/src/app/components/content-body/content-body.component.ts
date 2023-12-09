import { Component } from '@angular/core';
import { PictureService } from 'src/app/service/picture.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent {
  constructor(private pictureService:PictureService ){

  }
  searchedText:string="";
  onSearched(searchValue:string){
    this.searchedText = searchValue;
    this.getAllImages();
  }


  getAllImages(){
    this.pictureService.getSearchedImages(this.searchedText).subscribe(data=>{
      console.log(data);
    });
  }

}
