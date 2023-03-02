import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneBook } from '../interfaces/phoneBook';
import { PHONEBOOKS } from '../mock-data/mock-phone-book';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  phonebook: PhoneBook[] = [];
  PhoneBook = PHONEBOOKS;

  constructor() { }

  getContact(): Observable<PhoneBook[]> {
    return of(this.PhoneBook);
  }

  create(phonebook: PhoneBook): Observable<PhoneBook> {
    this.phonebook.push(phonebook);
    return of(phonebook);
  }
}
