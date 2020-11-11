import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddstudentComponent } from 'src/app/studentForm/addstudent.component';
import { IStudent } from '../models/IStudent';
import { StudentServeices } from '../services/studentServices';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {


  students: IStudent[];
  showTablesClicked:boolean=false;
  showChartsClicked:boolean=false;


  constructor(private _services: StudentServeices,private _router:Router) { }

  ngOnInit() {

    this._services.getStudents().subscribe(data => this.students = data);

  }

  OnStudentClick(id:number){  

    this._router.navigate(['/students/'+id])
  }

  showTables(){
    this.showTablesClicked=!this.showTablesClicked
    console.log(this.showTablesClicked)
  }

  showCharts(){
    this.showChartsClicked=!this.showChartsClicked
    console.log(this.showChartsClicked)
  }


 

}
