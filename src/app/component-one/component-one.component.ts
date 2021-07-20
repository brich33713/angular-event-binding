import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  username: string = "";
  emptyString: boolean = true;

  ngOnInit(): void {
  }

  changeInput(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    this.emptyString = this.username.length != 0 ? false : true;
  }

  buttonClick(){
    this.username = "";
  }


}
