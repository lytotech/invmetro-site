import { Component, Input } from '@angular/core';

@Component({
  selector: 'inv-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
  standalone: false
})
export class SectionHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() styleVariant: 'plain' | 'display' = 'display';
  @Input() compact = false;
}
