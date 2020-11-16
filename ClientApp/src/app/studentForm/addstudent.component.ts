import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStudent } from '../students/models/IStudent'
import { StudentServeices } from '../students/services/studentServices';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  classes = ["KgA", "KgB", "Primary1", "Primary2", "Middle1", "Middle2", "High1", "High2"];

  photo = "user_default.png";
  photoPath = "../../assets/images/User/" + this.photo

  studentForm: FormGroup;

  parentsTab: boolean = true;
  contactTab: boolean = false;

  student: IStudent;
  students: IStudent[];

  HeaderText = "Add Student";



  constructor(private _services: StudentServeices, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {

    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      nameAr: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', [Validators.required]],
      class: ['', [Validators.required]],
      religion: [''],
      mobile: [''],
      email: [''],
      address: [''],
      area: [''],
      photoPath: ['../../assets/images/User/' + this.photoPath],
      emergencyContact: [''],
      emergencyPhone: [''],
      locationOfBirth: [''],
      nationalityId: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      telephone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      notes: [''],
      fatherName: ['', [Validators.required]],
      fatherJob: [''],
      fatherMobile: [''],
      fatherAddress: [''],
      motherName: ['', [Validators.required]],
      motherMobile: [''],
      motherEmail: [''],
      motherSchool: [''],
      motherDegree: [''],
      motherGraduationYear: [''],
      motherAddress: ['']
    });

    this._services.getStudents().subscribe(data => this.students = data);
  }


  @Input()
  saveStudent(name) {

    // this.student = form.value;
    // this.student.studentId = this.students[this.students.length - 1].studentId + 1;
    // this._services.postStudent(this.student).subscribe((data: IStudent) => {
    //   console.log(this.student),
    //     this.studentForm.reset(),
    //     this._router.navigate(['/students'])
    // });

    console.log("success!!!" + name);

  }

  parentsClicked() {
    this.parentsTab = true;
    this.contactTab = false;

  }


  contactClicked() {
    this.parentsTab = false;
    this.contactTab = true;
  }


  CalculateAge(Id: number) {

    let year = "";
    let month = "";
    let day = "";

    let strId = Id.toString();
    if (strId.length == 14) {
      if (strId[0] == '2') {
        year = "19" + strId[1] + strId[2]

      }
      if (strId[0] == '3') {
        year = "20" + strId[1] + strId[2]
      }
      month = strId[3] + strId[4]
      day = strId[5] + strId[6]
    }

    return year + '-' + month + '-' + day

  }


  readURL(pic: string) {

    let str = pic.split('\\')
    console.log(str[str.length - 1])
    return "../../assets/images/User/" + str[str.length - 1]
  }

}
