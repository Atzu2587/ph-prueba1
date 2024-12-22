import { Component } from '@angular/core';
import { Circulo } from '../figura-geometrica';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  standalone: true
})
export class CircleComponent {
  radio: number = 0;
  resultado: number | null = null;

  calcular(): void {
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}
