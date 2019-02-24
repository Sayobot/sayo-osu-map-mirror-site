import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/service/ApiService';

@Component({
  selector: 'info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {

  constructor(
      public apiService: ApiService
  ) { }

  ngOnInit() {
  }

}
