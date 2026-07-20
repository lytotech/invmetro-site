import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

type AnalyticsParamValue = string | number | boolean | null | undefined;

export interface AnalyticsEventParams {
  [key: string]: AnalyticsParamValue;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly measurementId = 'G-SFKFHXMY7W';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  pageView(path: string, title = this.document.title): void {
    this.gtag('config', this.measurementId, {
      page_path: path,
      page_title: title
    });
  }

  trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
    this.gtag('event', eventName, this.cleanParams({
      page_path: this.currentPath(),
      ...params
    }));
  }

  private gtag(...args: unknown[]): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag(...args);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }

  private currentPath(): string {
    const location = this.document.location;
    const hashRoute = location.hash.startsWith('#/') ? location.hash.slice(1) : '';

    return hashRoute || `${location.pathname}${location.search}${location.hash}`;
  }

  private cleanParams(params: AnalyticsEventParams): AnalyticsEventParams {
    return Object.entries(params).reduce<AnalyticsEventParams>((cleaned, [key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        cleaned[key] = value;
      }

      return cleaned;
    }, {});
  }
}
