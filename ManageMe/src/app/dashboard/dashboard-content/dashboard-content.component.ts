import { Component } from '@angular/core';
import { projectDetails } from './project-details';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogTasksComponent } from './add-dialog-tasks/add-dialog-tasks.component';
import { EditDialogTasksComponent } from './edit-dialog-tasks/edit-dialog-tasks.component';
import { AddDialogFunctionalitiesComponent } from './add-dialog-functionalities/add-dialog-functionalities.component';
import { EditDialogFunctionalitiesComponent } from './edit-dialog-functionalities/edit-dialog-functionalities.component';
import { functionality } from 'src/app/models/functionality-model';
import { SaveFunctionalities } from 'src/app/helpers/localStorageHelper';
import { task } from 'src/app/models/task-model';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
})

export class DashboardContentComponent {

  projectList = projectDetails;
  loadProjects: any = {};

  constructor(public dialog: MatDialog) {
    const storedData = localStorage.getItem('functionalities');
    if (storedData) {
      this.loadProjects = JSON.parse(storedData);
    }
  }

  openAddDialogTasks(id: number) {
    const dialogRef = this.dialog.open(AddDialogTasksComponent, {
      data: { id: id },
    });
  }

  openEditDialogTasks(functionalityId: number, taskId: number) {
    this.dialog.open(EditDialogTasksComponent, {
      data: {
        functionality: functionalityId,
        task: taskId
      }
    });
  }  

  openAddDialogFunctionalities() {
    this.dialog.open(AddDialogFunctionalitiesComponent);
  }

  openEditDialogFunctionalities(functionality: any) {
    console.log(functionality)
    this.dialog.open(EditDialogFunctionalitiesComponent, {
      data: functionality
    });
    
  }

  deleteFunctionality(id: any) {
    const deleteFunctionallity = this.loadProjects.filter(
      (func: functionality) => func.functionalityID !== id
    );

    SaveFunctionalities(deleteFunctionallity);
    location.reload();
  }

  deleteTask(selectedFunctionalityId: number, taskId: number) {
    const selectedFunctionalityIndex = this.loadProjects.findIndex(
      (project: any) => project.functionalityID === selectedFunctionalityId
    );
    if (selectedFunctionalityIndex !== -1) {
      const selectedFunctionality =
        this.loadProjects[selectedFunctionalityIndex];
      const filteredTasks = selectedFunctionality.tasks.filter(
        (task: any) => task.taskID !== taskId
      );
      selectedFunctionality.tasks = filteredTasks;
      this.loadProjects[selectedFunctionalityIndex] = selectedFunctionality;
      SaveFunctionalities(this.loadProjects);
    }
    location.reload();
  }
}