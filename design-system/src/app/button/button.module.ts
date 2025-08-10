import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [RouterLink, CommonModule],
})
export class ButtonModule {}
