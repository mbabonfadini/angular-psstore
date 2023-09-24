import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.scss']
})
export class PageButtonComponent implements OnInit {
  @Input() pageLink: string = '';
  @Input() pageName: string = 'InsiraUmNome'

  constructor() { }

  ngOnInit(): void {
  }

}
