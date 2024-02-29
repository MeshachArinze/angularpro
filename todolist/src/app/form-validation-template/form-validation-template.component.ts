import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './form-validation-template.component.html',
  styleUrl: './form-validation-template.component.css',
})
export class FormValidationTemplateComponent {
  isFormSubmited: boolean = false;

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipcode: '',
    isAggree: false,
  };

  onSubmit(form: NgForm) {
    debugger;
    const isFormValid = form.form.valid;
    this.isFormSubmited = true;
  }
}
