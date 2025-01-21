import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InfoComponent } from './components/info/info.component';
import { ChatComponent } from './components/chat/chat.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StateComponent } from './components/state/state.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  FeatureData,
  FeaturesComponent,
} from './components/features/features.component';
import { IconComponent } from './components/icon/icon.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    InfoComponent,
    ChatComponent,
    TestimonialsComponent,
    QuestionsComponent,
    StateComponent,
    FooterComponent,
    FeaturesComponent,
    IconComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assessment-lovi-angular';

  feature1: FeatureData = {
    title: 'Scan your face to see it in its full glory',
    videoSrc: 'assets/videos/phone.mp4',
    phoneImage1: 'assets/images/phone1.avif',
    phoneImage2: 'assets/images/phone2.avif',
    svgIcon: 'assets/images/svg1.png',
    subFeatures: [
      {
        imageSrc: 'assets/images/skins.png',
        text: 'See the condition of 11+ skin issues',
      },
      {
        imageSrc: 'assets/images/calendar.png',
        text: 'Track how your skin changes over time',
      },
    ],
  };

  feature2: FeatureData = {
    isSecond: true,
    title: "Check cosmetics' fit with no brand affiliation",
    videoSrc: 'assets/videos/phone2.mp4',
    svgIcon: 'assets/images/svg2.png',
    subFeatures: [
      {
        imageSrc: 'assets/images/products.png',
        text: 'Find better-fit-to-you alternatives',
      },
      {
        imageSrc: 'assets/images/products2.png',
        text: 'See the safety of ingredients',
      },
    ],
  };

  feature3: FeatureData = {
    isSecond: true,
    title: 'Get an answer on any skincare question',
    videoSrc: 'assets/videos/phone3.mp4',
    svgIcon: 'assets/images/svg3.png',
    subFeatures: [
      {
        imageSrc: 'assets/images/graph.png',
        text: 'Best in class skincare assistant',
        subtitle: 'Lóvi AI surpassed the pass mark on US Medical License Exam',
      },
      {
        imageSrc: 'assets/images/suggestions.png',
        text: 'Suggestions personalized to you',
      },
    ],
  };
}
