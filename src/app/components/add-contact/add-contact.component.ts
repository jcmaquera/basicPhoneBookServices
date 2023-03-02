import { Component } from '@angular/core';
import { PhoneBook } from 'src/app/interfaces/phoneBook';
import { PhoneBookService } from 'src/app/services/phone-book.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  phonebook: PhoneBook[] = [];

  newContactName = '';
  newContactNumber = '';
  newContact = '';

  public errorMessage: string | undefined;

  constructor (private phoneBookService: PhoneBookService) { }
  ngOnInit() {
    this.phoneBookService.getContact().subscribe(phonebook => {
      this.phonebook = phonebook;
    })
  }

  addContact() {
    const newContact: PhoneBook = {
      name: this.newContactName,
      number: this.newContactNumber,
    };

    const contactExists = this.phonebook.some(
      (PhoneBook) => 
      PhoneBook.name === this.newContactName || 
      PhoneBook.number === this.newContactNumber
    );
   
  
      if (!contactExists) {
        this.phonebook.push(newContact);
      } else {
        this.errorMessage = "The name or phone number is already exist.";
      }
    }
}
