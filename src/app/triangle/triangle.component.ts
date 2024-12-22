import { Component } from '@angular/core';
import { TrianguloEscaleno } from '../figura-geometrica';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  standalone: true
})
export class TriangleComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  resultado: number | null = null;

  calcular(): void {
    const triangulo = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
    this.resultado = triangulo.calcularPerimetro();
  }
}
