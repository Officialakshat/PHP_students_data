import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  student = {
    name: '',
    email: '',
    age: null,
    course: ''
  };
  message: string = '';

  onSubmit() {
    if (
      !this.student.name ||
      !this.student.email ||
      !this.student.course ||
      this.student.age === null ||
      this.student.age === '' ||
      this.student.age <= 0
    ) {
      this.message = 'Please fill all fields correctly.';
    } else {
      this.message = 'Registration Successful!';
    }
  }
}
