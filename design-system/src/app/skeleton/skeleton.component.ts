import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-skeleton',
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss',
  standalone: false,
})
export class SkeletonComponent {
  @Input() width: string = '100%';
  @Input() height: string = '16px';
  @Input() borderRadius: string = '4px';
  @Input() marginBottom: string = '8px';
}
