import { Component, OnInit } from '@angular/core';
import { Project } from '../../../Project';
import { Projects } from '../../../mock-projects';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  projects:Project[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    //this.projects = this.projectService.getProjects();
    this.projectService.getProjects().subscribe((projects) => (this.projects = projects));
    console.log(this.projects);
  }

  addProject(project: Project){
    this.projects.push(project);
    //console.log(this.projects);
    this.addProjectToDb(project);
  }

  addProjectToDb(project: Project){
    this.projectService.createProjects(project).subscribe((projects) => (this.projects.push()));
  }
}
