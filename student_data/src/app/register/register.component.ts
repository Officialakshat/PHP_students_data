import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
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
    // Example: Simple check for demonstration
    if (this.student.name && this.student.email && this.student.age && this.student.course) {
      this.message = 'Login Successful!';
    } else {
      this.message = 'Login Unsuccessful. Please fill all fields.';
    }
  }
  
}
