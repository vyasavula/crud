import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students!: Student[];

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.students = this.classroomService.onGet();
  }
  onDelete(id: Number) {
    this.classroomService.onDelete(id);
  }
}
