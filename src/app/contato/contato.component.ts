import { Component } from '@angular/core';
import { UNITS } from '../shared/units.data';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.css'],
    standalone: false
})
export class ContatoComponent {

  units = UNITS;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}
