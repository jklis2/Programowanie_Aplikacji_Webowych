import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { WelcomeTextComponent } from './home/welcome-text/welcome-text.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogFunctionalitiesComponent } from './dashboard/dashboard-content/edit-dialog-functionalities/edit-dialog-functionalities.component';
import { AddDialogTasksComponent } from './dashboard/dashboard-content/add-dialog-tasks/add-dialog-tasks.component';
import { AddDialogFunctionalitiesComponent } from './dashboard/dashboard-content/add-dialog-functionalities/add-dialog-functionalities.component';
import { EditDialogTasksComponent } from './dashboard/dashboard-content/edit-dialog-tasks/edit-dialog-tasks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WelcomeTextComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    DashboardFooterComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    DashboardContentComponent,
    EditDialogFunctionalitiesComponent,
    AddDialogTasksComponent,
    AddDialogFunctionalitiesComponent,
    EditDialogTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTreeModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
