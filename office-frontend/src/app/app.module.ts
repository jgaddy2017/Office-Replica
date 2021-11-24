import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { ListOfProjectsComponent } from './components/projectComponents/list-of-projects/list-of-projects.component';
import { ProjectComponent } from './components/projectComponents/project/project.component';
import { AddProjectComponent } from './components/projectComponents/add-project/add-project.component';
import { ProjectContainerComponent } from './components/projectComponents/project-container/project-container.component';
import { LoginContainerComponent } from './components/loginComponents/login-container/login-container.component';
import { UserLoginComponent } from './components/loginComponents/user-login/user-login.component';
import { CreateLoginComponent } from './components/loginComponents/create-login/create-login.component';
import { ToggleCreateLoginComponent } from './components/loginComponents/toggle-create-login/toggle-create-login.component';



const appRoutes: Routes = [
  {path: '', component: LoginContainerComponent},
  {path: 'projects', component: ProjectContainerComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListOfProjectsComponent,
    ProjectComponent,
    AddProjectComponent,
    ProjectContainerComponent,
    UserLoginComponent,
    CreateLoginComponent,
    ToggleCreateLoginComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
