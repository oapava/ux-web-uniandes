import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-habito',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-habito.component.html',
  styleUrl: './crear-habito.component.scss'
})
export class CrearHabitoComponent {
  form: FormGroup;

  periodicidades = ['Día', 'Semana', 'Mes'];
  unidadesDuracion = ['Minutos', 'Horas', 'Días', 'Semana'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(80)]],
      descripcion: ['', [Validators.maxLength(250)]],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      periodicidadNumero: [1, [Validators.required, Validators.min(1)]],
      periodicidadUnidad: ['Semana', Validators.required],
      diasSemana: this.fb.group({
        lun: [true], mar: [false], mie: [false], jue: [false],
        vie: [false], sab: [false], dom: [false]
      }),
      duracionNumero: [1, [Validators.required, Validators.min(1)]],
      duracionUnidad: ['Semana', Validators.required],
      mensajeAlarma: [false]
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    alert('Hábito guardado:\n' + JSON.stringify(this.form.value, null, 2));
  }

  cancelar() {
    this.form.reset({
      periodicidadNumero: 1,
      periodicidadUnidad: 'Semana',
      duracionNumero: 1,
      duracionUnidad: 'Semana',
      diasSemana: { lun: true, mar: false, mie: false, jue: false, vie: false, sab: false, dom: false },
      mensajeAlarma: false
    });
  }
}
