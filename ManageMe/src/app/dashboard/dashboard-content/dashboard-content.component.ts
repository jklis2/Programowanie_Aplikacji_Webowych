import { Component } from '@angular/core';
import { projectDetails } from './project-details';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';


@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
})
export class DashboardContentComponent {
  projectList = projectDetails;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddDialogComponent);
  }

  deleteFunctionality(id: any) {
    // Find the index of the functionality with the given ID
    const functionalityIndex = this.projectList[0].functionallities.findIndex(
      (func) => func.functionallityID === id
    );

    if (functionalityIndex !== -1) {
      this.projectList[0].functionallities.splice(functionalityIndex, 1);
    }
  }
}
