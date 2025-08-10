import { Component, Input, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ds-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: string = 'text';
  @Input() errorMessage?: string;
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;

  value: string | null = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  onInput(val: string | null) {
    this.value = val || null;
    this.onChange(val);
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
