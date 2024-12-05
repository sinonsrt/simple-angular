import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupButtonComponent } from './components/popup-button/popup-button.component';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [PopupButtonComponent],
  imports: [CommonModule],
  providers: [LocalStorageService],
  exports: [PopupButtonComponent],
})
export class SharedModule {}
