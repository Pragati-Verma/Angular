import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
// 'type' Task to denote that it is a type definition
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true}) task!: Task; 
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask()
  { 
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
