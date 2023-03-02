import { Component, OnInit } from '@angular/core';
import { PhoneBook } from '../../interfaces/phoneBook';
import { PHONEBOOKS } from '../../mock-data/mock-phone-book';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  
  phonebook: PhoneBook[] = [];

  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit() {
    this.phoneBookService.getContact().subscribe(phonebook => {
      this.phonebook = phonebook;
    })
  }

  updateContactDetails?: PhoneBook;


  deletePhoneBook(id: number) {
      this.phonebook.splice(id, 1);
  }

  updatePhoneBook(phonebook: PhoneBook){
    this.updateContactDetails = phonebook;
  }
  
}
