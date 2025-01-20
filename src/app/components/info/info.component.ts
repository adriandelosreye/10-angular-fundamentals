import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observeInfoContainer();
  }

  private observeInfoContainer(): void {
    const infoContainer =
      this.el.nativeElement.querySelector('.info__container');

    if (!infoContainer) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            infoContainer.classList.add('in-viewport');

            const paragraphs = infoContainer.querySelectorAll('p');
            paragraphs.forEach((paragraph: HTMLParagraphElement, i: number) => {
              paragraph.style.setProperty('--delay', `${i * 0.3}s`);
            });

            observer.unobserve(infoContainer);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(infoContainer);
  }
}
