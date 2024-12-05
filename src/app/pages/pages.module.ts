import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldPageComponent } from './world-page/world-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WorldPageComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
