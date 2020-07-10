import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from  "./../../model/Todo";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt=faTrashAlt;//now we can use it as variable
  todos:Todo[];

  //since its private and inside the constructor only instances can use it of this class
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(//this returns observable
      tods=>this.todos=tods
    )

  }

  changeTodoStatus(tod:Todo){
    this.todoService.changeStatus(tod)
  }

  deleteTodo(tod:Todo){
    this.todoService.deleteTodo(tod)
  }

}
