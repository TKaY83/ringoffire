import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { addDoc, collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { setDoc } from '@firebase/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimaton = false;
  game: Game;
  currentCard: string = '';
  games$: Observable<any>;
  games: Array<any>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: Firestore) {
    const coll = collection(firestore, 'games');
    this.games$ = collectionData(coll);

    this.games$.subscribe((newGames) => {
      console.log('Game update', newGames)
      this.games = newGames;
    });
   }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) =>{
      console.log(params['id']);
    });
  }

  newGame() {
    this.game = new Game();
    // const coll = collection(this.firestore, 'games');
    // addDoc(coll, this.game.toJSON());
  }

  takeCard() {

    if (!this.pickCardAnimaton) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimaton = true;
      console.log('New Card:' + this.currentCard);
      console.log('Game is', this.game);

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimaton = false;
      }, 1200);
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 2) {
        this.game.players.push(name);
      }

    });
  }
}

