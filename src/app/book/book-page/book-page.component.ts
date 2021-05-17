import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  books: Array<Book> = [];
  selectedBook: Book = {};
  bookModel?: Book;

  constructor( private bookService : BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }

  addBookEvent( b: Book) {
    b.id = 2;
    this.bookService.add(b);
  }

  selectionClick( b:Book ) : void {
    this.selectedBook = b;
  }

}
