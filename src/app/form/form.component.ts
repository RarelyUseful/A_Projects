import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public name3 = '';
  @Input() public workspaces: Array<string> = [];
  @Input() public chosenWorkspace: string = '';

  @Output() public addPerson = new EventEmitter<{
    name: string;
    chosenWorkspace: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  public submit() {
    if (this.name3.trim()) {
      this.addPerson.emit({
        name: this.name3,
        chosenWorkspace: this.chosenWorkspace,
      });
      this.name3 = '';
    }
  }
  //@Input() public personList!: Array<Person>;
  //@Input() decreasePeople!: VoidFunction;

  //@Output() public editPerson = new EventEmitter();
}
