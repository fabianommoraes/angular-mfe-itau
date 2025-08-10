import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { InputModule } from './input/input.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, InputModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    choice: new FormControl('', Validators.required),
  });
  submitted = false;

  radioOptions = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ];

  get name() {
    return this.form.get('name')!;
  }
  get choice() {
    return this.form.get('choice')!;
  }

  getNameError() {
    if (this.name.hasError('required')) return 'Name is required';
    if (this.name.hasError('minlength'))
      return 'Name must be at least 3 characters';
    return '';
  }

  getChoiceError() {
    if (this.choice.hasError('required')) return 'You must choose an option';
    return '';
  }

  onSubmit() {
    this.submitted = true;
  }
}
