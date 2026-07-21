import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { UNITS } from '../units.data';

export interface SeoData {
  title: string;
  description: string;
  ogImage?: string;
}

const SITE_URL = 'https://invmetro.com.br';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private meta: Meta) {
  }

  injectBusinessJsonLd(): void {
    if (document.getElementById('business-jsonld')) {
      return;
    }

    const graph = UNITS.map(unit => {
      const [addressLocality, addressRegion] = unit.city.split(' - ');
      return {
        '@type': 'AutomotiveBusiness',
        name: unit.name,
        image: DEFAULT_OG_IMAGE,
        url: `${SITE_URL}/contato`,
        telephone: unit.whatsappNumber,
        email: unit.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: unit.streetAddress,
          addressLocality,
          addressRegion,
          addressCountry: 'BR'
        }
      };
    });

    const script = document.createElement('script');
    script.id = 'business-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(script);
  }

  apply(data: SeoData, path: string): void {
    const ogImage = data.ogImage ?? DEFAULT_OG_IMAGE;
    const url = `${SITE_URL}${path}`;

    this.titleService.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.updateCanonical(url);
  }

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
