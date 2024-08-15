import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Advanced Pipes Demo';
  today = new Date();
  value = 1500;

  user = {name:'Kaleem', age:150, email:'kaleem14you@gmail.com'};

  capString(item:string){
    return item.toUpperCase();
  }
}
