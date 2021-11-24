import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Project } from '../../../Project';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  title = 'appBootstrap';
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  createProjectName: string;
  createProjectType: string;


  closeResult: string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  onSubmit(){
    //console.log(this.createProjectName);
    //console.log(this.createProjectType);
    //this.modalService.dismissAll;
    const newProject = {
      UserId: 1,
      projectName: this.createProjectName,
      projectType: this.createProjectType,
      creationDate: 'Now',
      modifiedDate: 'Now'
    };
    //console.log(newProject);
    this.createProjectName="";

    this.onAddProject.emit(newProject);

  }

}
