import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  Task,
  TaskService
} from '../../task.barrel';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  public loading: boolean;
  @Input() public task: Task;
  @Output() public onError = new EventEmitter();

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    //
  }

  public updateTask(task: Task) {
    this.loading = true;
    this._taskService.update(
      task,
      {
        success: updatedTask => task = updatedTask,
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }

}
