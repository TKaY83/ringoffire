import { Component, OnChanges, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
// import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EditPlayerComponent } from '../edit-player/edit-player.component';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  playerWarning = false;
  gameOver = false;
  game: Game;
  gameId: string;
  landscape = false;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      this.gameId = params['id']
      // console.log(this.gameId);

      this
        .firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.playerImages = game.playerImages;
          this.game.stack = game.stack;
          this.game.pickCardAnimaton = game.pickCardAnimaton;
          this.game.currentCard = game.currentCard;
        });
    });

  }

  ngOnChanges() {
    if (screen.availHeight > screen.availWidth) {
      this.landscape = true;
    }
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {

    if (this.game.players.length < 2) {
      this.openDialog();
    } else if (this.game.stack.length == 0) {
      this.gameOver = true;
    } else if (this.game.players.length >= 2) {

      if (!this.game.pickCardAnimaton) {
        this.game.currentCard = this.game.stack.pop();
        this.game.pickCardAnimaton = true;
        // console.log('New Card:' + this.game.currentCard);
        // console.log('Game is', this.game);


        setTimeout(() => {
          this.game.currentPlayer++;
          this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        }, 1200)
        this.saveGame();
        setTimeout(() => {
          this.game.playedCards.push(this.game.currentCard);
          this.game.pickCardAnimaton = false;
          this.saveGame();
        }, 1200);
      }
    } else {
      this.playerWarning = true;
    }
  }

  editPlayer(playerId: number) {
    console.log('Edit pLayer', playerId);
    const dialogRef = this.dialog.open(EditPlayerComponent);

    dialogRef.afterClosed().subscribe((change: string) => {
      if (change) {
        if (change == 'DELETE') {
          this.game.playerImages.splice(playerId, 1)
          this.game.players.splice(playerId, 1)
        } else {
          this.game.playerImages[playerId] = change;

        }
        this.saveGame();
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 2) {
        this.game.players.push(name);
        this.game.playerImages.push('hund.svg');
        this.saveGame();
      }

    });
  }

  saveGame() {
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJSON());
  }
}

