import { Directive, HostListener, Input } from '@angular/core';
import { AnalyticsEventParams, AnalyticsService } from './analytics.service';

@Directive({
  selector: '[appTrackClick]',
  standalone: false
})
export class TrackClickDirective {
  @Input('appTrackClick') eventName = 'select_content';
  @Input() analyticsParams: AnalyticsEventParams = {};

  constructor(private analytics: AnalyticsService) {}

  @HostListener('click')
  trackClick(): void {
    this.analytics.trackEvent(this.eventName, this.analyticsParams);
  }
}
