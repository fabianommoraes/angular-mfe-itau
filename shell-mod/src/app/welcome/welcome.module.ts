import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { ButtonModule } from '../../../../design-system/src/app/button/button.module';
import { TypographyModule } from '../../../../design-system/src/app/typography/typography.module';

@NgModule({
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  imports: [ButtonModule, TypographyModule],
})
export class HeaderModule {}
