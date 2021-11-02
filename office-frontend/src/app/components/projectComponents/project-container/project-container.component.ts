import { Component, OnInit } from '@angular/core';
import { Project } from '../../../Project';
import { Projects } from '../../../mock-projects';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects:Project[] = Projects;

  addProject(project: Project){
    this.projects.push(project);
  }
}
