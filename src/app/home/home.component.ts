import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {

  readonly foundingYear = 2009;
  readonly yearsOfExperience = new Date().getFullYear() - this.foundingYear;

}
