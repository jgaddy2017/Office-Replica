import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ListOfProjectsComponent } from './components/projectComponents/list-of-projects/list-of-projects.component';
import { ProjectComponent } from './components/projectComponents/project/project.component';
import { AddProjectComponent } from './components/projectComponents/add-project/add-project.component';
import { ProjectContainerComponent } from './components/projectComponents/project-container/project-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfProjectsComponent,
    ProjectComponent,
    AddProjectComponent,
    ProjectContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
