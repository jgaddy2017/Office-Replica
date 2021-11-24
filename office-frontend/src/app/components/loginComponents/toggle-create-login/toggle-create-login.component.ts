import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-create-login',
  templateUrl: './toggle-create-login.component.html',
  styleUrls: ['./toggle-create-login.component.css']
})
export class ToggleCreateLoginComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() text:string;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
