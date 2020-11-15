import { Component } from '@angular/core';
import { IStudent } from './students/models/IStudent';
import { StudentServeices } from './students/services/studentServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'app';
  students: IStudent[];

  

}
