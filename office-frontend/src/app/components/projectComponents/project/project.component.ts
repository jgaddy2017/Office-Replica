import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.project);
    //console.log(something)

    console.log("just need something new to push");
  }

}
