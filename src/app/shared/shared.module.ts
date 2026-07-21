import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrackClickDirective } from './analytics/track-click.directive';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { StatCardComponent } from './stat-card/stat-card.component';

@NgModule({
  declarations: [
    TrackClickDirective,
    CtaSectionComponent,
    HeroSectionComponent,
    SectionHeaderComponent,
    ServiceCardComponent,
    UnitCardComponent,
    StatCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    TrackClickDirective,
    CtaSectionComponent,
    HeroSectionComponent,
    SectionHeaderComponent,
    ServiceCardComponent,
    UnitCardComponent,
    StatCardComponent
  ]
})
export class SharedModule {
}
