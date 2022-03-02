import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() personList: Array<Person> = [];
  @Input() availableWorkspaces: Array<string> = [];
  @Output() removeAtIndex = new EventEmitter<number>();

  public selectedWorkspace: string = 'All';
  constructor() {}

  ngOnInit(): void {}

  public delete(idx: number) {
    this.removeAtIndex.emit(idx);
  }
  @Output() clearList: EventEmitter<any> = new EventEmitter();
  public clear() {
    this.clearList.emit();
  }
  @Output() editPAI: EventEmitter<number> = new EventEmitter();
  public edit(idx: number) {
    /* this has to:
      send index i to editPersonAtIndex(i);
    */
    this.editPAI.emit(idx);
  }
}
