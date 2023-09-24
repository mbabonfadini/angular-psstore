import { Component, OnInit } from '@angular/core';
import { Games } from './Games.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games: Games[] = [
    {
      gameCover: 'assets/bt-1.jpg',
      gameLabel: 'DIGITAL',
      gameType: 'Full Game | PS4 | PS5',
      gamePrice: 'R$ 400,00',
    },
    {
      gameCover: 'assets/bt-4.jpg',
      gameLabel: 'EXCLUSIVE',
      gameType: 'Full Game | PS5',
      gamePrice: 'R$ 599,00',
    },
    {
      gameCover: 'assets/bt-5.jpg',
      gameLabel: 'DIGITAL',
      gameType: 'Full Game | PS4',
      gamePrice: 'R$ 350,00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
