import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
// import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimaton = false;
  game: Game;
  currentCard: string = '';

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params['id'])

      this
        .firestore
        .collection('games')
        .doc(params['id'])
        .valueChanges()
        .subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer
          this.game.playedCards = game.playedCards
          this.game.players = game.players
          this.game.stack = game.stack
        });
    });
  }

  newGame() {
    this.game = new Game();
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

