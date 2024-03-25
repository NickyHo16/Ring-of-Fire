import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Firestore, addDoc, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { Game } from '../../models/game';



@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent implements OnInit {

  firestore: Firestore = inject(Firestore);

  constructor(private router: Router){ }

 

  ngOnInit():void{

  }

   //start game
   newGame() {
    let game = new Game();
    addDoc(collection(this.firestore, 'games'), game.toJson(),).then((gameInfo: any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
  }

}

//<img (click)="newGame()" src="assets/img/startlabel.png" alt="start label image">
