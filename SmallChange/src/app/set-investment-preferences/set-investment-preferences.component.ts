import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-investment-preferences',
  templateUrl: './set-investment-preferences.component.html',
  styleUrls: ['./set-investment-preferences.component.css']
})
export class SetInvestmentPreferencesComponent implements OnInit {

  constructor() { }

  setPreferences() {
    let textarea = document.getElementsByTagName('textarea');
    let select = document.getElementsByTagName('select');
    let Preferences = {
      "Investment Purpose": textarea[0].value,
      "Risk Tolerance": select[0].value,
      "Income Category": select[1].value,
      "Duration of Investments": select[2].value
    }
    console.log(Preferences);
    alert('Your investment preferences have been successfully saved!')
    return Preferences;
  }

  ngOnInit(): void {
    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }    
            form.classList.add('was-validated')
          }, false)
        })
    })()
  }
 

}
