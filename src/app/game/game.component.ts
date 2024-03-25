import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Game } from '../../models/game';
import { OnInit } from '@angular/core';

import { NgClass, NgForOf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';

import { PlayerComponent } from '../player/player.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Firestore, collection, doc } from '@angular/fire/firestore';



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
    AngularFirestoreModule,
    NgForOf,
    NgStyle,
    NgIf,
    NgClass,   
    
  ],  
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {    
  pickCardAnimation=false;
  currentCard: string='';
  game: Game = new Game() ;
  firestore: any;
  gameId: string | undefined;
 
    

constructor(
  
  public dialog: MatDialog,
  private route: ActivatedRoute,
  //@Inject(Firestore) private firestore: Firestore ,// Inject Firestore
  //private http: HttpClient,
  //private firestore: AngularFirestore, // Verwenden Sie AngularFirestore
  //@Inject(Firestore) private firestore: AngularFirestore ,// Inject Firestore
 
  
  ){ }

  ngonDestroy() {
    this.unsubList();
  }
  unsubList() {
    throw new Error('Method not implemented.');
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  getSingleDoc(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

ngOnInit():void{
  this.newGame();  
 // this.route.params.subscribe((params) => {
 //   this.gameId = params['id'];

  //this.firestore.collection('games')    
 // .valueChanges()
  //.doc(this.gameId)
  //.subscribe((game: any) => {
   // console.log('Games update', game);  
  //});
//})
}

newGame(){
this.game= new Game();
//this.firestore
 // .collection('games')
 // .add({'Hallo':'Welt'}); // das ersetzen durch das: .add(this.toJson());
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