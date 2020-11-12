import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  classClicked: boolean = false;
  className: string = "";

  constructor() { }

  ngOnInit() {
  }

  OnClassClicked(className) {
    if (this.className == className) {
      this.classClicked = !this.classClicked
    }
    else {
      this.className = className;
    }
  }

}
