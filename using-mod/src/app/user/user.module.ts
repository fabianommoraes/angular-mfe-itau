import { Input, NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../../../../design-system/src/app/button/button.module';
import { TypographyModule } from '../../../../design-system/src/app/typography/typography.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModule } from '../../../../design-system/src/app/input/input.module';
import { RadioButtonModule } from '../../../../design-system/src/app/radiobutton/radiobutton.module';
import { AlertModule } from '../../../../design-system/src/app/alert/alert.module';
import { BackdropModule } from '../../../../design-system/src/app/backdrop/backdrop.module';

const routes: Routes = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [
    AlertModule,
    BackdropModule,
    RadioButtonModule,
    InputModule,
    CommonModule,
    ReactiveFormsModule,
    TypographyModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}
