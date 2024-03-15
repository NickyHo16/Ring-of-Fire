import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Game } from '../../models/game';
import { OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';

import { AngularFirestore } from '@angular/fire/firestore';


import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule, 
    PlayerComponent,
    MatInputModule, 
    FormsModule, 
    GameInfoComponent,
    MatCardModule,    
    Firestore,
    Observable,
    
  ],  
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {    
  pickCardAnimation=false;
  currentCard: string='';
  game: Game = new Game() ;

constructor(private firestore: AngularFirestore, public dialog: MatDialog){
  
  }

ngOnInit():void{
  this.newGame();
  this
    .firestore
    .collection('games')
    .valueChanges()
    .subscribe((game) => {
    console.log('Game update', game);  
  });
}

newGame(){
this.game= new Game();
this.firestore
  .collection('games')
  .add({'Hallo':'Welt'}); // das ersetzen durch das: .add(this.toJson());
}

  takeCard(){
    if(!this.pickCardAnimation){
    if (this.game.stack.length > 0) {
      this.currentCard = this.game.stack.pop()!;
      
      this.pickCardAnimation = true;
    
    console.log('New Card:'+ this.currentCard);
    console.log('Game is',this.game);

    this.game.currentPlayer++;
    this.game.currentPlayer=this.game.currentPlayer % this.game.players.length;
    setTimeout(()=>{
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation=false;
    }, 1000);
    }}
  }

openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);  //sorgt dafür, dass die Componente als Dialog geöffnet wird

  dialogRef.afterClosed().subscribe((name:string )=> {
    if(name && name.length>0){
    this.game.players.push(name);   
    }
  });
}
}

//JunusCode
//this.currentCard=this.game.stack.pop();
//console.log(this.currentCard);
//this.pickCardAnimation=true;