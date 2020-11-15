import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../models/IStudent';
import { StudentServeices } from '../services/studentServices';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {


  students: IStudent[];
  classes = ["Kga", "Kgb", "Primary1", "Primary2", "Middle1", "Middle2", "High1", "High2"];
  selectedTable = []

  searchTerm: string = "";
  selectedClass: string = "All";


  @Input()
  header = "";


  constructor(private _services: StudentServeices, private _router: Router) { }

  ngOnInit() {

    this._services.getStudents().subscribe(data => this.students = data)

  }

  OnStudentClick(id: number) {

    // this._router.navigate(['/students/' + id])
    console.log(id)
  }









}
