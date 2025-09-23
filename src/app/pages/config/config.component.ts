import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { IconButtonComponent } from '../../shared/icon-button/icon-button.component';
import { PhoneVerificationComponent } from '../phone-verification/phone-verification.component';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterOutlet, IconButtonComponent, PhoneVerificationComponent],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  isPhoneModalOpen = false;

  openPhoneModal() {
    this.isPhoneModalOpen = true;
  }

  closePhoneModal() {
    this.isPhoneModalOpen = false;
  }
}
