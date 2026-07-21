import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UnitInfo } from '../units.data';

@Component({
  selector: 'inv-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
  standalone: false
})
export class UnitCardComponent {
  @Input() unit!: UnitInfo;
  @Input() headerIcon = 'fa-map-marker-alt';
  @Input() showSubtitle = false;
  @Input() showHours = false;
  @Input() showEmail = true;
  @Input() showMap = true;
  @Input() analyticsSection = '';

  constructor(private sanitizer: DomSanitizer) {
  }

  get safeMapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.unit.mapEmbedUrl);
  }
}
