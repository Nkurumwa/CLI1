import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote []= [
    new Quote(1, 'first', 'Randy', 0, 0, 'Only those who will risk going too far can possibly find out how far one can go',new Date(2019,10,10)),
    new Quote(2,'Candle', 'Kenneth', 0, 0,'A candle loses nothing when lighting another candle',new Date(2019,11,12)),
    new Quote(3,'Motivation', 'Reagan', 0, 0, 'Motivation gets you moving and determination keeps you going',new Date(2020,12,12)),
  ];

}
