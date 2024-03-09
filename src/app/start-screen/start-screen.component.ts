import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router){ }

 

  ngOnInit():void{

  }

  newGame(){
    //start game
    this.router.navigateByUrl('/game');

  }

}

//<img (click)="newGame()" src="assets/img/startlabel.png" alt="start label image">