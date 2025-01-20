import { AfterViewInit, Component } from '@angular/core';

interface Testimonial {
  imageUrl: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit {
  public testimonials: Testimonial[] = [
    { imageUrl: 'assets/images/tw1.png' },
    { imageUrl: 'assets/images/tw2.png' },
    { imageUrl: 'assets/images/tw3.png' },
    { imageUrl: 'assets/images/tw4.png' },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initCarouselAnimation();
  }

  private initCarouselAnimation(): void {
    const carousel: HTMLElement | null = document.querySelector<HTMLElement>(
      '.testimonials__carousel'
    );
    if (!carousel) {
      return;
    }

    const slides: NodeListOf<HTMLElement> =
      document.querySelectorAll<HTMLElement>('.testimonials__slide');
    if (slides.length === 0) {
      return;
    }

    const cloneSlides = (): void => {
      slides.forEach((slide) => {
        const clone: HTMLElement = slide.cloneNode(true) as HTMLElement;
        carousel.appendChild(clone);
      });
    };

    cloneSlides();

    const totalWidth = (): number => {
      const totalSlides: NodeListOf<HTMLElement> =
        document.querySelectorAll<HTMLElement>('.testimonials__slide');
      let width: number = 0;
      totalSlides.forEach((slide) => {
        width += slide.offsetWidth + 20;
      });
      return width;
    };

    const totalWidthSize: number = totalWidth();
    const style: HTMLStyleElement = document.createElement('style');
    style.textContent = `
      @keyframes carouselAnimation {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(-${totalWidthSize / 2}px));
        }
      }
    `;
    document.head.appendChild(style);
  }
}
