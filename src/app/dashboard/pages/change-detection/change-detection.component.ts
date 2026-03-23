import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((valor) => {
        valor.name = 'React';
        return { ...valor };
      });

      this.frameworkAsSignal.set({ name: 'React', releaseDate: 212 });

      this.frameworkAsProperty.name = 'React';
      console.log('Hecho');
    }, 3000);
  }
}
