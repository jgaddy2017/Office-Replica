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
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit(){
    //console.log(this.createProjectName);
    //console.log(this.createProjectType);
    //this.modalService.dismissAll;
    const newProject = {
      name: this.createProjectName,
      type: this.createProjectType,
      lastUpdated: 'Now'
    };
    //console.log(newProject);
    this.createProjectName="";

    this.onAddProject.emit(newProject);

  }

}
