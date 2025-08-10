//@ts-ignore
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserService } from '../services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    choice: new FormControl('URL Params', Validators.required),
  });

  loading = false;
  error = false;

  radioOptions = [
    { label: 'URL Params', value: 'URL Params' },
    { label: 'API', value: 'API' },
  ];

  get name() {
    return this.form.get('name')!;
  }
  get email() {
    return this.form.get('email')!;
  }
  get choice() {
    return this.form.get('choice')!;
  }

  getNameError() {
    if (this.name.hasError('required')) return 'Campo obrigatório';
    if (this.name.hasError('minlength'))
      return 'Nome precisa ter pelo menos 3 caracteres';
    return '';
  }

  getEmailError() {
    if (this.email.hasError('required')) return 'Campo obrigatório';
    if (this.email.hasError('email')) return 'Email inválido';
    return '';
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;

      const data: User = {
        name: this.name.value || '',
        email: this.email.value || '',
        choice: this.choice.value || '',
      };

      this.userService.createUser(data).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);

          switch (data.choice) {
            case 'URL Params':
              this.router.navigate(['/sucesso'], {
                queryParams: data,
              });
              break;
            case 'API':
              this.router.navigate([`/sucesso/usuario/${response.id}`]);
              break;
            case 'LocalStorage':
              localStorage.setItem('user', JSON.stringify(data));
              this.router.navigate(['/sucesso']);
              break;
            default:
              console.error('Invalid choice:', data.choice);
              return;
          }
        },
        error: (e) => {
          this.loading = false;
          this.error = true;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
