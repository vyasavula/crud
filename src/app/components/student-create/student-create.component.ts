import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent {
  constructor() {}
  AddForm = new FormGroup({
    studentName: new FormControl(''),
    studentNumber: new FormControl(''),
  });
  collectData() {
    console.log(this.AddForm.value);
  }
}
