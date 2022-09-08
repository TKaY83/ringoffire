import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { addDoc, collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { setDoc } from '@firebase/firestore';
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
  games$: Observable<any>;
  games: Array<any>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: Firestore) {
    // const coll = collection(this.firestore, 'games');
    // this.games$ = collectionData(coll);

    // this.games$.subscribe((newGames) => {
    //   console.log('Game update', newGames)
    //   this.games = newGames;
    // });
  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe( async (params:any) => {
      console.log(params['id']);

      const coll = collection(this.firestore, 'games');
      const docRef = doc(coll, params['id']);
      const docSnap = await getDoc(docRef);

      this.game.currentPlayer = params.currentPlayer;
      this.game.playedCards = params.playedCards;
      this.game.players = params.players;
      this.game.stack = params.stack;


      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    });

    // ngOnInit(): void {
    //   this.newGame();
  
    //   //angular fire modular API
    //   const coll = collection(this.firestore, 'items');
    //   this.games$ = collectionData(coll);
    //   this.games$.subscribe( changes => this.games = changes );
  
    //   //angular fire compat API
    //   this.angularFirestore
    //   .collection('games')
    //   .valueChanges({idField : 'customIdName'})
    //   .subscribe(changes => this.games = changes);
    // }
  
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

