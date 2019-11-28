import { Component, OnInit } from '@angular/core';

import{TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-ghjh',
  templateUrl: './ghjh.component.html',
  styleUrls: ['./ghjh.component.css']
})
export class GhjhComponent{

  constructor(public todoService: TodoService){


  }
  OnChange(id:number){
    this.todoService.Change(id);
  }
}
