import { Component, Input } from '@angular/core';

@Component({
  selector: 'inv-cta',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css'],
  standalone: false
})
export class CtaSectionComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() variant: 'dark' | 'light' = 'dark';
}
