import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    { id: 't1', userId: 'u1', title: 'Finish the Angular course', summary: 'Complete all modules', dueDate: '2025-12-31' },
    { id: 't2', userId: 'u3', title: 'Go to the gym', summary: 'Work out for 1 hour', dueDate: '2025-11-30' },
    { id: 't3', userId: 'u3', title: 'Prepare for the meeting', summary: 'Gather all necessary documents', dueDate: '2025-10-15' }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
