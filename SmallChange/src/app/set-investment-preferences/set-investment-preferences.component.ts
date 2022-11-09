import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Preferences } from '../models/preferences';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-set-investment-preferences',
  templateUrl: './set-investment-preferences.component.html',
  styleUrls: ['./set-investment-preferences.component.css'],
})
export class SetInvestmentPreferencesComponent implements OnInit {
  form: any;
  formValidity: Boolean = false;
  userId: string = '';
  preferences: Preferences = new Preferences();

  checkboxValue: boolean = false;

  constructor(
    private router: Router,
    private preferencesService: PreferencesService,
    private route: ActivatedRoute,
    public loginServ: LoginService
  ) {
    // update this.preferences.userId here to make it submit it to backend
  }

  setPreferences() {
    if (
      this.checkboxValue == false ||
      Object.entries(this.preferences).length < 4
    ) {
      console.log('Form is invalid!');
      return;
    }
    console.log(this.preferences);
    this.addNewPreference(this.preferences);
    // this.updatePreference(this.preferences);
    alert('Your investment preferences have been successfully saved!');
    this.router.navigate(['Home', this.userId]);
  }

  updatePreference(preference: Preferences) {
    this.preferencesService
      .updatePreference(preference.userId, preference)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  addNewPreference(preference: Preferences) {
    this.preferencesService.addPreference(preference).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.form = document.querySelector('.needs-validation');
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
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
