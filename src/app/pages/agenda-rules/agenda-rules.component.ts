import { Component } from '@angular/core';
import { IconButtonComponent } from '../../shared/icon-button/icon-button.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agenda-rules',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './agenda-rules.component.html',
  styleUrl: './agenda-rules.component.scss'
})
export class AgendaRulesComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
          diasSemana: this.fb.group({
            lun: [true], mar: [false], mie: [false], jue: [false],
            vie: [false], sab: [false], dom: [false]
          })
        });
  }

  cancelar() {
    this.form.reset({
      diasSemana: { lun: true, mar: false, mie: false, jue: false, vie: false, sab: false, dom: false }
    });
  }

}
