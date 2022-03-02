import { Component } from '@angular/core';
class UserInfo {
  name: string;
  email: string;
  language: string;

  constructor(name: string, email: string, language: string) {
    this.name = name;
    this.email = email;

    this.language = language;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A_Projects';
  public username: string = '';
  public useremail: string = '';
  public translating: boolean = false;
  public language: string = '';
  public languages: Array<string> = [
    'Polish',
    'French',
    'Pirate',
    `Bark. Because i'm blind and my dog will read this to me.`,
  ];
  _userBase: Array<UserInfo> = [];
  public submit(
    name: string,
    email: string,
    transated: boolean,
    language: string
  ) {
    if (transated == true) {
      this._userBase.push(new UserInfo(name, email, language));
    }
    if (transated == false) {
      this._userBase.push(new UserInfo(name, email, 'English'));
    }
    this.username = '';
    this.useremail = '';
    this.translating = false;
    this.language = '';
  }
}
