import { Injectable } from '@angular/core';
//importing of operator from rxjs
import { of } from 'rxjs';
//importing model
import { Todo } from "./../model/Todo"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //todos is an array of type todo of our model
  todos:Todo[];

  constructor() {
    this.todos=[{
      id:'111',
      title:'learn c',
      isComplete:true,
      date:new Date()
    },
  {
    id:'222',
    title:'React',
    isComplete:true,
    date:new Date()

  },
   {
    id:'333',
    title:'Angular',
    isComplete:false,
    date:new Date()

   }]
   }


   getTodos(){
     //we need these array values to be converted to observables and then give it to other components so that they can observe that
     return of(this.todos)
   }

   addTodo(tod:Todo){
     this.todos.push(tod)

   }

   //here we are changing just one property of isComplete
   changeStatus(tod:Todo){
   //map iterates through array
    this.todos.map(singleTodo=>{
      if(singleTodo.id == tod.id){
        tod.isComplete=!tod.isComplete
      }
    });

   }

    deleteTodo(tod:Todo){
      const index=this.todos.findIndex(
        (currentObj)=>currentObj.id === tod.id
      );
      this.todos.splice(index,1)//this basically remooves that object
    }



}
