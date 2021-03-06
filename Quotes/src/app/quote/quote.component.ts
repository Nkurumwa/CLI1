import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'first', 'Randy', 0, 0, 'Only those who will risk going too far can possibly find out how far one can go',new Date(2005,10,10)),
    new Quote(2,'Candle', 'Kenneth', 0, 0,'A candle loses nothing when lighting another candle',new Date(1999,11,12)),
    new Quote(3,'Motivation', 'Reagan', 0, 0, 'Motivation gets you moving and determination keeps you going',new Date(2000,12,12)),
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
    this.quotes.push(quote)
  }

  addition(hey,index){
    this.quotes[index].upvote+=1
  }

  
  down(hi, index){
    this.quotes[index].downvote+=1
  }
  preNum:number
 lastNum:number
 counter:number
highestUpvote(){
   this.preNum = 0
   this.lastNum = 0
   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
     this.lastNum = this.quotes[this.counter].upvote;
     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
   }
   return  this.preNum
 }
  constructor() { }

  ngOnInit() {
  }

}
