import { Component } from '@angular/core';
import { Project } from './Project';
import { Projects } from './mock-projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'office-frontend';
  projects:Project[] = Projects;

  addProject(project: Project){
    this.projects.push(project);
  }
}


