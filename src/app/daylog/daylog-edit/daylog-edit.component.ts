import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-daylog-edit',
  templateUrl: './daylog-edit.component.html',
  styleUrls: ['./daylog-edit.component.css']
})
export class DaylogEditComponent implements OnInit {

  @Output() instantTaskCreated = new EventEmitter<{ taskName: string, taskLength: number }>();
  instantTaskName = 'New task for today';
  instantTaskLength = 10;

  constructor() { }

  ngOnInit() {
  }

  onInstantTaskCreated() {
    this.instantTaskCreated.emit({
      taskName: this.instantTaskName,
      taskLength: this.instantTaskLength
    });
  }
}
