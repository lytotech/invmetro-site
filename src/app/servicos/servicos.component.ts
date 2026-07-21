import { Component } from '@angular/core';
import { SERVICE_CATEGORIES } from '../shared/services.data';

@Component({
    selector: 'app-servicos',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.css'],
    standalone: false
})
export class ServicosComponent {
  active = 1;
  categories = SERVICE_CATEGORIES;

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
