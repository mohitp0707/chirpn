import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './httpservice.service';
import { TodoTaskComponent } from './todo-task/todo-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: '',
         component: TodoTaskComponent
      }
   ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
