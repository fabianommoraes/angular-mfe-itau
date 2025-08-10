import { NgModule } from '@angular/core';
import { SkeletonComponent } from './skeleton.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SkeletonComponent],
  exports: [SkeletonComponent],
  imports: [CommonModule],
})
export class SkeletonModule {}
