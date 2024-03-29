import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() gameCover: string = ''
  @Input() gameLabel: string = '';
  @Input() gameType: string ='Digital PS4'
  @Input() gamePrice: string ='Gratis'

  constructor() { }

  ngOnInit(): void {
  }

}
