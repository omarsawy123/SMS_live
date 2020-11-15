import { Component, HostListener } from '@angular/core';
import { IStudent } from '../students/models/IStudent';
import { StudentServeices } from '../students/services/studentServices';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {


  students: IStudent[];
  studentss = [{
    id: null,
    name: "name"
  }]
  toggled: boolean = true;
  toggle_style: string = "sidebar"

  constructor(private _services: StudentServeices) { }

  ngOnInit(): void {

    this._services.getStudents().subscribe(data => this.students = data)

    

  }



  toggle() {
    this.toggled = !this.toggled;
  }


}

