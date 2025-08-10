import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  host: { 'data-mf-id': 'remote' },
  standalone: false,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() tag: 'button' | 'a' = 'button';
  @Input() type: string = 'button';
  @Input() href?: string;
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'special' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
