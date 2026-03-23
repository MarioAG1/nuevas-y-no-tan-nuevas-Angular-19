import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: `<h1>Hola Mundo</h1>`,
})
export class HeavyLoadersSlowComponent {
  // @Input({ required: true }) cssClass!: string;
  cssClass = input.required<string>();

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}

    console.log('Cargado');
  }
}
