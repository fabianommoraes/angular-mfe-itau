import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrl: './table.scss',
  standalone: false,
})
export class TableComponent {
  @Input() type: string = '';
}
