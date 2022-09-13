import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  //english version below

  cardActionEN = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  //turkish version below

  cardActionTR = [
    { title: 'Şelale', description: 'Herzez ayni zamda icmeli. 1. Oyuncu içmeyi bırakır bırakmaz 2. Oyuncu içmeyi bırakabilir. 3. Oyuncu, 2. Oyuncu içmeyi bıraktığı anda durabilir, vb.' },
    { title: 'Sen', description: 'Kimin içeceğine sen karar ver' },
    { title: 'Ben', description: 'Tebrikler! Bir içki iç!' },
    { title: 'Kategori', description: 'Bir kategori bulun (örneğin, Renkler). Her oyuncu kategoriden bir öğeyi söylemeli.' },
    { title: 'Oynat', description: '1. Oyuncu bir dans hareketi yapar. 2. Oyuncu dans hareketini tekrarlar ve devam ettirir.' },
    { title: 'Kızlar', description: 'Bütün kızlar içer.' },
    { title: 'Gök', description: 'Eller yukarı! Son oyuncu içer!' },
    { title: 'Tayfa', description: 'Bir eş seç. Eşiniz her zaman içtiğinizde içmelidir ve tam tersi.' },
    { title: 'Thumbmaster/Joker', description: '' },
    { title: 'Erkekler', description: 'Bütün erkekler içer.' },
    { title: 'Quizmaster/Joker', description: '' },
    { title: 'Ben hic bir zaman...', description: 'Hiç yapmadığınız bir şey söyleyin. Bunu yapan herkes içmeli.' },
    { title: 'Kural', description: 'Bir kural yap. Kuralı çiğnediğinde herkesin içmesi gerekir.' },
  ];

  //german version below

  cardActionDE = [
    { title: 'Wasserfall', description: 'Alle müssen gleichzeitig mit dem Trinken beginnen. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören zu trinken. Spieler 3 kann aufhören, sobald Spieler 2 aufhört zu trinken, und so weiter.' },
    { title: 'Du', description: 'Du entscheidest, wer trinkt' },
    { title: 'Ich', description: 'Herzlichen Glückwunsch! Trink einen Shot!' },
    { title: 'Kategorie', description: 'Überlegen Sie sich eine Kategorie (z. B. Farben). Jeder Spieler muss einen Gegenstand aus der Kategorie aufzählen.' },
    { title: 'Tanz Move', description: 'Spieler 1 macht eine Tanzbewegung. Spieler 2 wiederholt die Tanzbewegung und fügt eine zweite hinzu, und so weiter. ' },
    { title: 'Mädels', description: 'Alle mädchen trinken.' },
    { title: 'Himmel', description: 'Hände hoch! Der letzte Spieler trinkt!' },
    { title: 'Partner', description: 'Suche dir einen Partner aus. Ihr Partner muss immer trinken, wenn Sie trinken und umgekehrt.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Männer', description: 'Alle Männer Trinken.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Ich habe noch nie...', description: 'Sag etwas, was du nie getan hast. Jeder, der es getan hat, muss trinken.' },
    { title: 'Regel', description: 'Machene eine Regel. Jeder muss trinken, wenn er die Regel bricht.' },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.card) {
      // console.log('Current card is:', this.card.split('_')[0])
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardActionEN[cardNumber - 1].title;
      this.description = this.cardActionEN[cardNumber - 1].description;
    }

  }

}
