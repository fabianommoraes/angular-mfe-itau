import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ds-radiobutton',
  standalone: false,
  templateUrl: './radiobutton.html',
  styleUrls: ['./radiobutton.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() options: { label: string; value: string }[] = [];
  @Input() label?: string;
  @Input() name?: string;

  value: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  select(val: string) {
    this.value = val;
    this.onChange(val);
    this.onTouched();
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
