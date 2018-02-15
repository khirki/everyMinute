import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-daylog',
  templateUrl: './daylog.component.html',
  styleUrls: ['./daylog.component.css']
})
export class DaylogComponent implements OnInit {

  tasks: Task[] = [
    new Task("tralalal", 10),
    new Task("łohohoh", 20),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddedInstantTask(taskData: { taskName: string, taskLength: number }) {
    this.tasks.push(
      new Task(taskData.taskName, taskData.taskLength)
    );
  }


}
