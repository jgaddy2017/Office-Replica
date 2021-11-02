import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../Project';
import { Projects } from '../../../mock-projects';

@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.css']
})
export class ListOfProjectsComponent implements OnInit {
  //ProjectList: Project[] = Projects;
  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
