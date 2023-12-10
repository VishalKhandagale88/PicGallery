import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor() {
  }
  searchedText: string = "";

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>;

  onSearchClicked() {
    if (this.searchedText.trim() === "") {
      alert("please seach for a image")
    } else {
      this.searchTextChange.emit(this.searchedText);

    }
  }

}
