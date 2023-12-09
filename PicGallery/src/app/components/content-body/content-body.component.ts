import { Component } from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent {
  searchedText:string="";
  onSearched(searchValue:string){
    this.searchedText = searchValue;
  }
}
