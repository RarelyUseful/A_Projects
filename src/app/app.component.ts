import { Component } from '@angular/core';
class Person {
  name: string;
  workspace: string;
  constructor(name: string, workspace: string) {
    this.name = name;
    this.workspace = workspace;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A_Projects';
  //public name:string = '';
  public name3: string = '';
  //public familyName:string = '';

  // public welcome(){
  //   alert('Welcome ' +this.name +" "+this.familyName);
  // }
  // public byebye(){
  //   alert('Bye bye ' +this.name +" "+this.familyName);
  //   this.name = '';
  //   this.familyName = '';
  // }
  public maxPeople: number = 16;
  public currentPeople: number = 3;

  public increasePeople() {
    if (this.currentPeople < this.maxPeople) {
      this.currentPeople++;
      this._updateColor();
      return true; //line neded in addPerson() to prevent adding people when counter is maxed.
    } else {
      alert("Can't let any more people in");
      return false; //same as above.
    }
  }
  public decreasePeople() {
    if (this.currentPeople > 0) {
      this.currentPeople--;
      this._updateColor();
    } else alert('Room is already empty');
  }
  public colorClass: string = 'basic';
  private _updateColor() {
    if (this.currentPeople === this.maxPeople) {
      this.colorClass = 'max';
    } else if (this.currentPeople + 3 >= this.maxPeople) {
      this.colorClass = 'warning';
    } else {
      this.colorClass = 'basic';
    }
  }

  public personList: Array<Person> = [
    { name: 'Ciri', workspace: 'Angular' },
    { name: 'Triss', workspace: 'Vue' },
    { name: 'Yennefer', workspace: 'React' },
  ];

  public addPerson() {
    if (this.name3.trim()) {
      if (this.increasePeople()) {
        this.personList.push({
          name: this.name3.trim(),
          workspace: this.choosenWorkspace,
        });
        this.name3 = '';
      }
    }
  }
  public clearPersonList() {
    this.personList = [];
    this.currentPeople = 0;
    this.name3 = '';
    this._updateColor();
  }
  public removePersonAtIndex(index: number) {
    this.personList.splice(index, 1);
    this.decreasePeople();
  }

  workspaces = ['Angular', 'React', 'Vue'];
  choosenWorkspace = 'Angular';
  public editPersonAtIndex(index: number) {
    this.name3 = this.personList[index].name;
    this.choosenWorkspace = this.personList[index].workspace;
    this.personList.splice(index, 1);
    this.decreasePeople();
  }
}
