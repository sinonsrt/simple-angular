import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-popup-button',
  imports: [],
  templateUrl: './popup-button.component.html',
  styleUrl: './popup-button.component.scss',
})
export class PopupButtonComponent {
  showPopup: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  openPopup() {
    this.showPopup = true;
  }

  saveToLocalStorage() {
    this.localStorageService.setItem('meuValor', 'algumValor');
    this.showPopup = false;
    alert('Valor salvo no localStorage!');
  }

  closePopup() {
    this.showPopup = false;
  }
}
