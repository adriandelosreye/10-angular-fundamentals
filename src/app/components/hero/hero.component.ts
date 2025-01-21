import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  public products: string[] = [
    "assets/images/miniProduct.png",
    "assets/images/miniProduct2.png",
  ]
  ngAfterViewInit(): void {
    this.animateHeroMain();
    this.animateHeroImages();
    this.delayedContentUpdate();
  }

  private animateHeroMain(): void {
    gsap.fromTo(
      '.hero__main',
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'power2.out' }
    );
  }

  private animateHeroImages(): void {
    gsap.fromTo(
      '.hero__images',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }

  private delayedContentUpdate(): void {
    setTimeout(() => {
      const womanImage: HTMLImageElement | null =
        document.querySelector('.hero__images img');
      const textElement: HTMLParagraphElement | null =
        document.querySelector('.hero__text p');
      const scanLine: HTMLElement | null =
        document.querySelector('.hero__scanline');
      const products: HTMLElement | null =
        document.querySelector('.hero__products');

      if (womanImage && textElement && scanLine && products) {
        womanImage.src = 'assets/images/women3.avif';
        womanImage.alt = 'A woman with scanned skin';
        textElement.textContent = "Here's a set of tailored skincare:";
        scanLine.style.display = 'none';
        products.style.display = 'flex';
      }
    }, 5000);
  }
}
