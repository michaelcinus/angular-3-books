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
    this.bookModel.id = b.id;
    this.bookModel.title = b.title;
    this.bookModel.author = b.author;
    this.bookModel.year = b.year;
  }

  get book ( ) {
    return this.book_;
  }

  @Output()
  feedbackEv: EventEmitter<Book>;

  constructor() {
    this.feedbackEv = new EventEmitter<Book>();
    this.bookModel.id = 0;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.feedbackEv.emit(this.bookModel);
    this.bookModel = {};
  }


}
