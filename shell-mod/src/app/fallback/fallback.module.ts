import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackComponent } from './fallback.component';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from '../../../../design-system/src/app/notfound/notfound.module';

@NgModule({
  declarations: [FallbackComponent],
  imports: [
    NotFoundModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: FallbackComponent }]),
  ],
})
export class FallbackModule {}
