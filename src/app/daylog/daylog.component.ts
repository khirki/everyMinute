import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-daylog',
  templateUrl: './daylog.component.html',
  styleUrls: ['./daylog.component.css']
})
export class DaylogComponent implements OnInit {

  tasks: Task[] = [
    new Task("tralalal", 'elo siema', 'pets', 10),
    new Task("łohohoh", 'xddd', 'pets', 20),
  ];

  constructor() { }

  ngOnInit() {
  }

}
