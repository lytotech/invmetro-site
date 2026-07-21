import { Component } from '@angular/core';
import { UNITS } from '../shared/units.data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
  units = UNITS;

}
