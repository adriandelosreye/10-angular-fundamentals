import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';

export interface FeatureData {
  isSecond?: boolean;
  title: string;
  videoSrc: string;
  phoneImage1?: string;
  phoneImage2?: string;
  subFeatures: SubFeature[];
  svgIcon: string;
  subtitle?: string;
}

interface SubFeature {
  imageSrc: string;
  text: string;
  subtitle?: string;
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements AfterViewInit, OnDestroy {
  public featureData = input<FeatureData>();

  @ViewChild('mediaContainer') mediaContainer!: ElementRef;
  private observer?: IntersectionObserver;
  private cards: Element[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.mediaContainer) {
      this.cards = Array.from(
        this.mediaContainer.nativeElement.querySelectorAll('.card')
      );

      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: 0.2,
          rootMargin: '50px',
        }
      );

      this.observer.observe(this.mediaContainer.nativeElement);
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.cards.forEach((card) => {
          this.renderer.addClass(card, 'animate');
        });
      } else {
        this.cards.forEach((card) => {
          this.renderer.removeClass(card, 'animate');
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.observer && this.mediaContainer) {
      this.observer.unobserve(this.mediaContainer.nativeElement);
    }
  }
}
