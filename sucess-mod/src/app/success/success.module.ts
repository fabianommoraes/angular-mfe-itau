import { NgModule } from '@angular/core';
import { SuccessComponent } from './success.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../../../../design-system/src/app/button/button.module';
import { TypographyModule } from '../../../../design-system/src/app/typography/typography.module';
import { SkeletonModule } from '../../../../design-system/src/app/skeleton/skeleton.module';
import { NotFoundModule } from '../../../../design-system/src/app/notfound/notfound.module';
import { TableModule } from '../table/table.module';

const routes: Routes = [{ path: '', component: SuccessComponent }];

@NgModule({
  declarations: [SuccessComponent],
  imports: [
    NotFoundModule,
    TableModule,
    SkeletonModule,
    CommonModule,
    ReactiveFormsModule,
    TypographyModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class SuccessModule {}
