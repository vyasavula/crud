import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { ClassroomService } from 'src/app/services/classroom.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  header!: string;
  student: Student = {
    id: 0,
    name: '',
    class: '',
    roll: 0,
    isActive: true,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private classroomService: ClassroomService
  ) {}

  ngOnInit(): void {
    this.header = this.id === 0 ? 'Add Student' : 'Edit Student';

    // if (this.id != 0) {
    //   this.student = this.classroomService.onGetStudent(this.id);
    // }
  }
  onSubmit(form: NgForm) {
    let student: Student = {
      id: form.value.id,
      name: form.value.name,
      class: form.value.class,
      roll: form.value.roll,
      isActive: form.value.isActive,
    };

    // if (this.id === 0) {
    //   this.classroomService.onAdd(student);
    // } else {
    //   this.classroomService.onUpdate(student);
    // }

    this.classroomService.onAdd(student);
    this.router.navigateByUrl('');
  }
}
