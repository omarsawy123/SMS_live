import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { IStudent } from 'src/app/students/models/IStudent';
import { StudentServeices } from 'src/app/students/services/studentServices';

@Component({
  selector: 'app-home-page-charts',
  templateUrl: './home-page-charts.component.html',
  styleUrls: ['./home-page-charts.component.css']
})
export class HomePageChartsComponent implements OnInit {


  students: IStudent[];

  constructor(private _services: StudentServeices) {
    this._services.getStudents().subscribe(data => this.students = data)
  }

  ngOnInit() {

    this._services.getStudents().subscribe(data => this.students = data, () => console.log("error"),
      () => {
        this.getAreas(this.students)
        this.getReligion(this.students)
      })

  }



  getReligion(ListStudents: IStudent[]) {

    let ListofReligions = [];
    let seen = [];
    let result = [];
    let religionCount = [];
    let religionNames = [];

    ListStudents.forEach(stud => {
      ListofReligions.push(stud.religion);
    });

    ListofReligions.forEach(rel => {
      if (!seen.includes(rel)) {
        result.push(ListofReligions.filter(s => s == rel))
        seen.push(rel)
      }
    });

    result.forEach(rel => {
      religionNames.push(rel[0])
      religionCount.push(rel.length)
    });

    var myChart = new Chart("myChart2", {
      type: 'doughnut',
      data: {
        labels: religionNames,
        datasets: [{
          label: '# Religion',
          data: religionCount,
          backgroundColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderWidth: 1
        }]
      }
    });
  }

  getAreas(ListStudents: IStudent[]) {

    let listOfAreas = []
    let seen = []
    let result = []
    let areaNames = []
    let areasCount = []

    ListStudents.forEach(stud => {
      if (stud.area != null) {
        listOfAreas.push(stud.area);
      }
    });

    listOfAreas.forEach(areaID => {

      if (!seen.includes(areaID)) {
        result.push(listOfAreas.filter(s => s == areaID))
        seen.push(areaID);
      }


    });

    result.forEach(areaName => {
      areasCount.push(areaName.length)
      areaNames.push(areaName[0])
    });

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: areaNames.slice(0, 6),
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Students in Area ',
          // data: [12, 19, 3, 5, 2, 3],
          data: areasCount.slice(0, 6),
          backgroundColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    // var myChart2 = new Chart("myChart2", {
    //   type: 'doughnut',
    //   data: {
    //     labels: areaNames.slice(0, 6),
    //     // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: 'Students in Area ',
    //       // data: [12, 19, 3, 5, 2, 3],
    //       data: areasCount.slice(0, 6),
    //       backgroundColor: [
    //         '#f56954',
    //         '#00a65a',
    //         '#f39c12',
    //         '#00c0ef',
    //         '#3c8dbc',
    //         '#d2d6de',
    //       ],
    //       borderColor: [
    //         '#f56954',
    //         '#00a65a',
    //         '#f39c12',
    //         '#00c0ef',
    //         '#3c8dbc',
    //         '#d2d6de',
    //       ],
    //       borderWidth: 1
    //     }]
    //   }
    // });
    var myChart3 = new Chart("myChart3", {
      type: 'doughnut',
      data: {
        labels: areaNames.slice(0, 6),
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Students in Area ',
          // data: [12, 19, 3, 5, 2, 3],
          data: areasCount.slice(0, 6),
          backgroundColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderWidth: 1
        }]
      }
    });
    var myChart4 = new Chart("myChart4", {
      type: 'doughnut',
      data: {
        labels: areaNames.slice(0, 6),
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Students in Area ',
          // data: [12, 19, 3, 5, 2, 3],
          data: areasCount.slice(0, 6),
          backgroundColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de',
          ],
          borderWidth: 1
        }]
      }
    });

  }



}
