import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  password = '';
  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
    let tags = document.getElementsByTagName('input');
    tags[0].addEventListener('input', (err) => {
      var errorText = document.getElementsByTagName('p');
      console.log(errorText[0].style.display)
      var inputText = tags[0].value
      var regex = new RegExp('^[a-zA-Z0-9-_-]{3,18}$');
      if (regex.test(inputText)) {
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
      var errorText = document.getElementsByTagName('p');
      console.log(errorText[1].style.display)
      var inputText = tags[1].value
      var regex = new RegExp('^[a-zA-Z0-9-_-]{6,24}$');
      if (regex.test(inputText)) {
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
  }
}
