import { Component } from '@angular/core';
import { Card1 } from '../../ui/card1/card1';
import { Accordion } from '../../ui/accordion/accordion';


@Component({
  selector: 'app-about',
  imports: [Card1 , Accordion,],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
