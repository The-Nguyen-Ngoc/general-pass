import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public numberGen = 0;
  includeLetters = false;

  click() {
    console.log('aaaaa');
  }

  onChangeIncludeLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }
}
