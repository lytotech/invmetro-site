import { Component, Input } from '@angular/core';

@Component({
  selector: 'inv-hero',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: false
})
export class HeroSectionComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
}
