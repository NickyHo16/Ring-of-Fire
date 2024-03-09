import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges{
cardAction=[
  {title:'Ace - Waterfall', description:'All players start to drink. In a clockwise direction, drinking may only be stopped when the person sitting next to you on the right has finished his waterfall. The player who draws the ace is allowed to stop drinking first (if he wants).'},
  {title:'2 - You', description:'You can choose a person who drink '},
  {title:'3 - Me', description:'You have to drink'},
  {title:'4 - Thumbmaster', description:'You are the thumb master until the next 4 is picked. Put your thumb on a surface. Everyone must copy you. The last person to do so drinks.'},
  {title:'5 - Guys', description:'All men have to drink'},
  {title:'6 - Chicks', description:'All women have to drink'},
  {title:'7 - Heaven', description:'Put your hands up! The last player drinks!'},
  {title:'8 - Mate', description:'Choose a mate to drink with you. They must now match you until the next 8 is picked.'},
  {title:'9 - Rhyme', description:'Pick a word. In a clockwise direction, the other players have to figure it out. Anyone who repeats a word or cannot find a new rhyme hato drink.'},
  {title:'10 - Category', description:'Pick a word. In a clockwise direction, the other players have to figure it out. Anyone who repeats a word or cannot find a new rhyme have to drink.'},
  {title:'Jack - Rule', description:'Make a rule. The player who drew the card makes a new rule (e.g. you cant say the word -yes- or you cant put your drink down) and anyone who breaks the rule at any time throughout the rest of the game has to drink.'},
  {title:'Queen - Never have i ever ... ', description:'The player may call out "Never have I ever ..." for one round. The losers drink.'},
  {title:'King - Pour', description:'If a king is drawn, the player may pour a drink of his choice into the Kingscup. If the fourth king is drawn, the player must immediately empty the kingscup in the middle of the game.'},
   ];

title ='';
description ='';

@Input() card : string| undefined;

constructor(){ }

ngOnChanges():void{
  if(this.card){
console.log('current card:', this.card);
let cardNumber= +this.card.split('_')[1];
this.title = this.cardAction[cardNumber-1].title;
this.description = this.cardAction[cardNumber-1].description;
}}

}
