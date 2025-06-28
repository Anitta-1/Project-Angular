import { Component } from '@angular/core';
import { Navbar } from '../../ui/navbar/navbar';
import { Carousel } from "../../ui/carousel/carousel";
import { Card1 } from "../../ui/card1/card1";
import { Card2 } from '../../ui/card2/card2';

import { Text } from '../../ui/text/text';

@Component({
  selector: 'app-home',
  imports: [Carousel,Text, Card1, Card2,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
