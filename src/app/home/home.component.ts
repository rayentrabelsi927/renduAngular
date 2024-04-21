import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string ="rayen trabelsi"
  color!:string

  affich(){
    alert("hello rayen ")
  }
}
