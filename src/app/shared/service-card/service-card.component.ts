import { Component, Input } from '@angular/core';
import { ServiceInfo } from '../services.data';

@Component({
  selector: 'inv-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
  standalone: false
})
export class ServiceCardComponent {
  @Input() service!: ServiceInfo;

  scrollToPricing(event: Event): void {
    event.preventDefault();
    document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
