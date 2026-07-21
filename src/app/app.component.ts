import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './shared/analytics/analytics.service';
import { SeoService } from './shared/seo/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'invmetro-site';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private analytics: AnalyticsService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.injectBusinessJsonLd();

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      window.scrollTo(0, 0);

      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }

      const data = route.snapshot.data;
      if (data['title'] && data['description']) {
        const canonicalPath = data['canonicalPath'] ?? event.urlAfterRedirects;
        this.seo.apply({ title: data['title'], description: data['description'] }, canonicalPath);
      }

      this.analytics.pageView(event.urlAfterRedirects);
    });
  }
}
