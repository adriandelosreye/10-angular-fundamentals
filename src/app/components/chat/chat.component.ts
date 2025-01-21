import { Component } from '@angular/core';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-chat',
  imports: [RecommendationComponent, OptionsComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {

}
