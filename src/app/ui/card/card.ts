import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() imageUrl1!: string;
   @Input() paragraph!: string; 

}
