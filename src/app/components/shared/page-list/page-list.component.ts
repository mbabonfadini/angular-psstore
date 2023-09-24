import { Component, OnInit } from '@angular/core';
import { Pages } from './Pages.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
  pages: Pages[] = [
    {
      link: '',
      name: 'Home',
    },
    {
      link: 'PlayStationPlus',
      name: 'PlayStation Plus',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
