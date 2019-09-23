// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Quote } from '@angular/compiler';

// @Component({
//   selector: 'app-quote-detail',
//   templateUrl: './quote-detail.component.html',
//   styleUrls: ['./quote-detail.component.css']
// })
// export class QuoteDetailComponent implements OnInit {

//   @Input() quote: Quote;
//   @Output() isComplete = new EventEmitter<boolean>();

//   quoteDelete(complete:boolean){
//     this.isComplete.emit(complete);
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:Quote
  @Output() isComplete= new EventEmitter<boolean>();
  @Output () isAdd = new EventEmitter<boolean>();
@Output () isDown = new EventEmitter<boolean>();
 
addVote(comp:boolean){
    this.isAdd.emit(comp);
  }

  addDown(com:boolean){
    this.isDown.emit(com);
  }

  quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}


  constructor() {
  }
  ngOnInit() {
  }
}
