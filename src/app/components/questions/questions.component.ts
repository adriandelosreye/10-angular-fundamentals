import { Component } from '@angular/core';

interface Question {
  title: string;
  text: string;
}
@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  public questions: Question[] = [
    {
      title: 'What is Lovi™?',
      text: `Lovi™ is a personal skincare assistant iOS app. It features a
          cosmetics scanner, a face scanner trained by a medical board, and
          expert skincare guidance provided through a chat with our AI
          assistant. It also has personalized routine programs and product
          recommendations tailored to your unique needs.`,
    },
    {
      title: 'Is it safe & secure?',
      text: `At Lóvi, we are dedicated to ensuring a secure user environment. All
          skincare recommendations in the app are safe for all skin types,
          including sensitive skin, and are suitable for pregnant or
          breastfeeding women.`,
    },
    {
      title: 'Are you brand-affiliated?',
      text: `Lóvi stands as a 100% independent project. We prioritize skincare
          science, offering recommendations based on product composition rather
          than brand hype.`,
    },
    {
      title: 'How are you science-backed exactly?',
      text: `Lóvi's recommendations are rooted in a comprehensive, science-backed
          methodology that prioritizes safety and evidence-based insights.
          
          Our Comprehensive Safety Evaluation assesses each product against
          international standards, referencing trusted sources like the European
          Chemical Agency, FDA, TGA, and the Cosmetic Ingredient Review (CIR).
          This ensures we identify and flag harmful ingredients based on
          authoritative data.
          
          Additionally, our fit scoring system combines scientific research with
          dermatologist, chemist, and aesthetician input to provide clear,
          reliable product evaluations tailored to each user’s skin needs.
          
          With Lóvi, you receive recommendations based on proven data and robust
          scientific analysis, ensuring safe and effective skincare guidance.`,
    },
  ];
}
