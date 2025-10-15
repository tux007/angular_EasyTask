import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
    { id: 't1', userId: 'u1', title: 'Finish the Angular course', summary: 'Complete all modules', dueDate: '2025-12-31' },
    { id: 't2', userId: 'u3', title: 'Go to the gym', summary: 'Work out for 1 hour', dueDate: '2025-11-30' },
    { id: 't3', userId: 'u3', title: 'Prepare for the meeting', summary: 'Gather all necessary documents', dueDate: '2025-10-15' }
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);    
  };

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}