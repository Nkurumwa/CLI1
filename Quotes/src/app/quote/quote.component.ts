import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'first', 'Only those who will risk going too far can possibly find out how far one can go',new Date(2019,10,10)),
    new Quote(2,'Candle','A candle loses nothing when lighting another candle',new Date(2019,11,12)),
    new Quote(3,'Motivation','Motivation gets you moving and determination keeps you going',new Date(2020,12,12)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push()
  }
  constructor() { }

  ngOnInit() {
  }

}
