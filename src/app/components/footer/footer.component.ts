import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  public links: string[] = [
    "Careers",
    "Privacy policy",
    "Money-back policy",
    "Terms of use"
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initFooterAnimation();
  }

  private initFooterAnimation(): void {
    const footer: HTMLElement | null = document.querySelector('.footer');
    const footerContent: HTMLElement | null =
      document.querySelector('.footer__content');
    const imageSection: HTMLElement | null =
      document.querySelector('.image__section');

    if (!footer || !footerContent || !imageSection) {
      return;
    }

    window.addEventListener('scroll', () => {
      const scrollPosition: number = window.scrollY;
      const footerPosition: number = footer.offsetTop;
      const adjustedScroll: number = scrollPosition - footerPosition;

      const contentDisplacement: number = Math.max(0, adjustedScroll / 1.8);

      if (footerContent) {
        footerContent.style.transform = `translateY(${contentDisplacement}px)`;
      }
    });
  }
}
