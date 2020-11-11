import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  toggled: boolean = true;
  toggle_style: string = "sidebar"

  toggle() {
    this.toggled = !this.toggled;
  }


}

