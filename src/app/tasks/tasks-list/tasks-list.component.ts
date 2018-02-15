import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [
    new Task('wykąpać Szprota', 30, "Do kąpieli potrzebna jest duża wanna", 'pets')
  ];

  constructor() { }

  ngOnInit() {
  }

}
