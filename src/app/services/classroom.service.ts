import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  students: Student[] = [
    {
      id: 1,
      name: 'John',
      class: 'First Class',
      roll: 303,
      isActive: true,
    },
    {
      id: 2,
      name: 'Xaveir',
      class: 'Second Class',
      roll: 33,
      isActive: true,
    },
    {
      id: 3,
      name: 'Jean',
      class: 'Third Class',
      roll: 33,
      isActive: true,
    },
    {
      id: 4,
      name: 'Thorreau',
      class: 'Fourth Class',
      roll: 89,
      isActive: true,
    },
  ];
  constructor() {}

  onGet() {
    return this.students;
  }

  onAdd(student: Student) {
    this.students.push(student);
  }

  onDelete(id: Number) {
    let student = this.students.find((x) => x.id === id)!;
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  onGetStudent(id: Number) {
    return this.students.find((x) => x.id === id);
  }

  // onUpdate(student: Student) {
  //   let oldStudent = this.students.find((x) => x.id === student.id);
  //   oldStudent.name = student.name;
  //   oldStudent.class = student.class;
  //   oldStudent.roll = student.roll;
  //   oldStudent?.isActive = student.isActive;
  // }
}
