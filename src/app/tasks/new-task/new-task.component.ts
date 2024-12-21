import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string; 
  @Output() close = new EventEmitter();
  //@Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  private tasksService = inject(TasksService);

  onCancel()
  {
    this.close.emit();
  }

  onSubmit()
  {
    this.tasksService.addTask({
      title: this.enteredTitle,
      dueDate: this.enteredDate,
      summary: this.enteredSummary
    },this.userId);
    this.close.emit();
  }
}