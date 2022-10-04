import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  // register() {
  //   let tags = document.getElementsByTagName('input');
  //   let credentials = {
  //     emailId: tags[0].value,
  //     password: tags[1].value,
  //     firstName: tags[3].value,
  //     lastName: tags[4].value,
  //     dob: tags[5].value,
  //     phone: tags[6].value
  //     // investmentrisk: tags[7].value
  //   }
  //   console.log(credentials);
  //   return credentials
  // }

  register() {
    console.log(this.user);
    this.saveUser();
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
    let tags = document.getElementsByTagName('input');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
    var phoneformat = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    tags[0].addEventListener('input', (err) => {
      var inputText = tags[0].value;
      var errorText = document.getElementsByTagName('p');
      errorText[0].style.display = 'none';
      if (mailformat.test(inputText)) {
        errorText[0].style.display = 'none';
        tags[0].style.borderWidth = 'medium';
        tags[0].style.borderStyle = 'solid';
        tags[0].style.borderColor = 'black';
      } else {
        tags[0].style.borderStyle = 'solid';
        tags[0].style.borderColor = 'red';
        tags[0].style.borderWidth = 'medium';
        errorText[0].style.display = 'block';
      }
    });
    tags[1].addEventListener('input', (err) => {
      var password = tags[1].value;
      var errorText = document.getElementsByTagName('p');
      if (passformat.test(password)) {
        errorText[1].style.display = 'none';
        tags[1].style.borderWidth = 'medium';
        tags[1].style.borderStyle = 'solid';
        tags[1].style.borderColor = 'black';
      } else {
        tags[1].style.borderStyle = 'solid';
        tags[1].style.borderColor = 'red';
        tags[1].style.borderWidth = 'medium';
        errorText[1].style.display = 'block';
      }
    });
    tags[2].addEventListener('input', (err) => {
      var password = tags[1].value;
      var inputText = tags[2].value;
      var errorText = document.getElementsByTagName('p');
      if (password === inputText) {
        errorText[2].style.display = 'none';
        tags[2].style.borderWidth = 'medium';
        tags[2].style.borderStyle = 'solid';
        tags[2].style.borderColor = 'black';
      } else {
        tags[2].style.borderStyle = 'solid';
        tags[2].style.borderColor = 'red';
        tags[2].style.borderWidth = 'medium';
        errorText[2].style.display = 'block';
      }
    });
    tags[6].addEventListener('input', (err) => {
      var phonenumber = tags[6].value;
      var errorText = document.getElementsByTagName('p');
      if (phoneformat.test(phonenumber)) {
        errorText[3].style.display = 'none';
        tags[6].style.borderWidth = 'medium';
        tags[6].style.borderStyle = 'solid';
        tags[6].style.borderColor = 'black';
      } else {
        tags[6].style.borderStyle = 'solid';
        tags[6].style.borderColor = 'red';
        tags[6].style.borderWidth = 'medium';
        errorText[3].style.display = 'block';
      }
    });

  }
}
