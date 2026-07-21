import { Component } from '@angular/core';
import { UNITS } from '../shared/units.data';

@Component({
    selector: 'app-sobre',
    templateUrl: './sobre.component.html',
    styleUrls: ['./sobre.component.css'],
    standalone: false
})
export class SobreComponent {

  units = UNITS;
  readonly foundingYear = 2009;
  readonly yearsOfExperience = new Date().getFullYear() - this.foundingYear;

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
