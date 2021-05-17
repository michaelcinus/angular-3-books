import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book> = [];

  constructor( ) { 
    this.books.push(
      { title: 'primo libro', author: 'primo levi', year: 2020},
      { title: 'secondo libro', author: 'secondo levi', year: 2021}
    )
   }

   getAll(): Book[] {
    return this.books;
  }

   add( b: Book) {
      this.books.push(b);
   }

   edit(b: Book, index:number) {
     this.books[index] = b;
   }

   delete(index: number) {
     this.books.splice(index, 1);
   }
}
