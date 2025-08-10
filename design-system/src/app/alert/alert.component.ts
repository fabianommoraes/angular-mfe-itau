import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-alert',
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
  standalone: false,
})
export class AlertComponent {
  @Input() message: string =
    'Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.';

  @Input() error: boolean = false;
  @Output() errorChange = new EventEmitter<boolean>();

  closeAlert() {
    this.errorChange.emit(false);
  }
}
