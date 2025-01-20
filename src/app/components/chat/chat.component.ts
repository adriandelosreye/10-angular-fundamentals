import { Component } from '@angular/core';

interface Product {
  rating: string;
  title: string;
  price: string;
  img: string;
}
@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  public products: Product[] = [
    {
      rating: "92",
      title: "The Ordinary Retinol Serum 0.5% In Squalane",
      price: "from $8.30",
      img: "assets/images/product1.png"
    },
    {
      rating: "89",
      title: "Medik8 Crystal Retinal 6",
      price: "from $53.90",
      img: "assets/images/product2.png"
    },
    {
      rating: "90",
      title: "Paula's Choice Clinical 1% Retinol Treatment",
      price: "from $68.50",
      img: "assets/images/product3.png"
    }
  ]
}
