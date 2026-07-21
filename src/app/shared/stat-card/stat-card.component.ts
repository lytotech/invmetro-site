import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'inv-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'],
  standalone: false
})
export class StatCardComponent implements AfterViewInit {
  @Input() icon = '';
  @Input() target = 0;
  @Input() suffix = '';
  @Input() label = '';
  @Input() description = '';

  @ViewChild('numberEl') numberEl!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const el = this.numberEl.nativeElement;
    const target = this.target;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
      current += increment;
      if (current < target) {
        el.textContent = Math.floor(current).toString();
        requestAnimationFrame(updateNumber);
      } else {
        el.textContent = target.toString();
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateNumber();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(el);
  }
}
