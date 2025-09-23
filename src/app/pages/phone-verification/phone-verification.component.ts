import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

type Step = 'phone' | 'code' | 'success';

@Component({
  selector: 'app-phone-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './phone-verification.component.html',
  styleUrl: './phone-verification.component.scss'
})
export class PhoneVerificationComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();

  step: Step = 'phone';
  phoneForm: FormGroup;
  codeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phone: ['']
    });

    this.codeForm = this.fb.group({
      d1: [''],
      d2: [''],
      d3: [''],
      d4: ['']
    });
  }

  //enviar código
  sendCode() {
    this.step = 'code';
  }

  //verificar código
  verifyCode() {
    this.step = 'success';
  }

  accept() {
    this.step = 'phone';
    this.phoneForm.reset();
    this.codeForm.reset();
    this.isOpen = false;
    this.closed.emit();
  }

  close() {
    this.step = 'phone';
    this.phoneForm.reset();
    this.codeForm.reset();
    this.isOpen = false;
    this.closed.emit();
  }
}
