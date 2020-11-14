import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular'
import { title } from 'process';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-calender-component',
  templateUrl: './calender-component.component.html',
  styleUrls: ['./calender-component.component.css']
})
export class CalenderComponentComponent {

  calenderoptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      {
        title: 'The Title', // a property!
        start: '2020-11-11', // a property!
        end: '2020-11-22' // a property! ** see important note below about 'end' **
      }
    ]
  }

  calender: Calendar;


  ngOnInit() {



  }



  handleDateClick() {

    let event1 = [{
      title: '1',
      start: '2020-11-12',
      end: '2020-11-12'
    }]

    this.calenderoptions.events = event1;
    // this.calenderoptions.eventAdd([event1]);


  }

  toggleWeekends() {
    this.calenderoptions.weekends = !this.calenderoptions.weekends // toggle the boolean!
  }


}
