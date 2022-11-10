
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute) { }

  form: any;
  formValidity: Boolean = false;
  user: User = new User();

  updateUser() {
    var errorText = document.getElementsByTagName('p');

    if (errorText[0].style.display == 'block' || Object.entries(this.user).length < 7) {
      
      console.log('Form is invalid!' + Object.entries(this.user).length);
      return;  
    }
    console.log(this.user);
    this.update();
    this.router.navigate(['Home', this.user.userId]);
  }

  update() {
    this.userService.updateUser(this.user.userId, this.user).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  public ngOnInit(): void {
    this.form = document.querySelector('.form');
    this.route.params.subscribe((params) => {
      this.user.userId = +params['id'];
      this.userService.getUserById(this.user.userId).subscribe((res) => {
        this.user.balance = res.balance;
        this.user.emailId = res.emailId;
        this.user.firstName = res.firstName;
        this.user.lastName = res.lastName;
        this.user.dob = res.dob;
        this.user.phNo = res.phNo;
      });
    });

    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
    let tags = document.getElementsByTagName('input');
    var phoneformat = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    tags[3].addEventListener('input', (err) => {
      var phonenumber = tags[3].value;
      var errorText = document.getElementsByTagName('p');
      console.log(errorText)
      if (phoneformat.test(phonenumber)) {
        errorText[0].style.display = 'none';
        tags[3].style.borderWidth = 'medium';
        tags[3].style.borderStyle = 'solid';
        tags[3].style.borderColor = 'black';
      } else {
        tags[3].style.borderStyle = 'solid';
        tags[3].style.borderColor = 'red';
        tags[3].style.borderWidth = 'medium';
        errorText[0].style.display = 'block';
      }
    });
    this.form.addEventListener(
      'submit',
      (event: { preventDefault: () => void; stopPropagation: () => void }) => {
        this.formValidity = this.form.checkValidity();

        if (!this.formValidity) {
          event.preventDefault();
          event.stopPropagation();
          let button = document.getElementsByTagName('button');
        }
        this.form.classList.add('was-validated');
      },
      false
    );

  }
}
