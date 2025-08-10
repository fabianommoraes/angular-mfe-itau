import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-typography',
  templateUrl: './typography.html',
  styleUrls: ['./typography.scss'],
  standalone: false,
})
export class TypographyComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'span';
  @Input() weight: 'normal' | 'bold' = 'normal';
  @Input() color: 'default' | 'primary' | 'success' | 'error' = 'default';
  @Input() text: string = '';
}
