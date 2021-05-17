import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book_: Book = {};
  bookModel: Book = {};

  @Input()
  set book ( b: Book) {
    this.book_ = b;
  }

  get book ( ) {
    return this.book_;
  }

  @Output()
  feedbackEv: EventEmitter<Book>;

  constructor() {
    this.feedbackEv = new EventEmitter<Book>();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.feedbackEv.emit(this.book_);
  }


}
