import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'ds-input',
  template: '<input [value]="value" (input)="onInput($event)" />',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockInputComponent),
      multi: true,
    },
  ],
})
class MockInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() errorMessage: string = '';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}

@Component({
  standalone: false,

  selector: 'ds-radiobutton',
  template: '<div></div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockRadioButtonComponent),
      multi: true,
    },
  ],
})
class MockRadioButtonComponent implements ControlValueAccessor {
  @Input() options: { label: string; value: string }[] = [];
  @Input() name: string = '';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

@Component({
  standalone: false,
  selector: 'ds-button',
  template: '<button [disabled]="disabled">{{ text }}</button>',
})
class MockButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
}

@Component({
  standalone: false,
  selector: 'ds-typography',
  template: '<p>{{ text }}</p>',
})
class MockTypographyComponent {
  @Input() text: string = '';
  @Input() tag: string = 'p';
  @Input() size: string = '';
  @Input() weight: string = '';
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['createUser']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        MockInputComponent,
        MockRadioButtonComponent,
        MockButtonComponent,
        MockTypographyComponent,
      ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.form.value).toEqual({
      name: '',
      email: '',
      choice: 'URL Params',
    });
  });

  it('should show validation errors for invalid name', () => {
    const nameControl = component.name;
    nameControl.setValue('');
    expect(component.getNameError()).toBe('Campo obrigatório');

    nameControl.setValue('Jo');
    expect(component.getNameError()).toBe(
      'Nome precisa ter pelo menos 3 caracteres'
    );
  });

  it('should show validation errors for invalid email', () => {
    const emailControl = component.email;
    emailControl.setValue('');
    expect(component.getEmailError()).toBe('Campo obrigatório');

    emailControl.setValue('invalid-email');
    expect(component.getEmailError()).toBe('Email inválido');
  });

  it('should submit the form and navigate with URL Params', () => {
    //@ts-ignore
    mockUserService.createUser.and.returnValue(of({ id: 1 }));

    component.form.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      choice: 'URL Params',
    });

    component.onSubmit();

    expect(mockUserService.createUser).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
      choice: 'URL Params',
    });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sucesso'], {
      queryParams: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        choice: 'URL Params',
      },
    });
  });

  it('should handle errors during form submission', () => {
    mockUserService.createUser.and.returnValue(
      throwError(() => new Error('Service error'))
    );

    component.form.setValue({
      name: 'Bob',
      email: 'bob@example.com',
      choice: 'API',
    });

    component.onSubmit();

    expect(component.loading).toBeFalse();
    expect(component.error).toBeTrue();
  });
});
