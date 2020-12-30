import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../httpservice.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  constructor(private http: HttpClient,private apiService:ApiService) { }
  taskInfo:any={};
  isadd:boolean=false;
  tasklist:any=[];
  ngOnInit() {
      this.getdata();
  }

  onSubmit(form,data){
      if(form.invalid){
        return;
      }else{
        console.log(data._id);
        if(data._id=='' || data._id==undefined){
          this.apiService.addtask(data)
          .subscribe((data:any) => {
            console.log(data)
            this.getdata();
            this.taskInfo={};
            this.isadd=false;
            alert(data.message);
           
          },err=>{
            console.log(err);
            alert(err.error.message);
          })  
        }else{
          this.apiService.update(data,data._id)
          .subscribe((data:any) => {
            console.log(data)
            this.taskInfo={};
            this.getdata();
            this.isadd=false;
            alert(data.message);
           
          },err=>{
            console.log(err);
            alert(err.error.message);
          })  
        }
        
        
      }
  }
  getdata(){
    this.apiService.gettask()
    .subscribe((data:any) => {
      this.tasklist=data.todolist;
      console.log(this.tasklist);
    })      
  }
  edit(task){
    task.sdate=new Date(task.sdate).toISOString().split('T')[0];
      console.log(task.sdate);
      this.taskInfo=task;
      this.isadd=true;
      console.log(task);
  }
  delete(task){
    var r = confirm("Are you want to delete task"+task.name);
      if (r == true) {
        this.apiService.deletedata(task._id)
          .subscribe((data:any) => {
            console.log(data)
            this.getdata();
            this.isadd=false;
            alert(data.message);
          
          })  
      } else {
      }
    
  }

  reset(){
    this.taskInfo={};
  }

}
