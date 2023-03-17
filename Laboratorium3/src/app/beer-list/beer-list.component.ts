import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})

export class BeerListComponent implements OnInit {
  @Output() selectedBeer = new EventEmitter();
  protected list: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const url = 'https://api.punkapi.com/v2/beers';
    this.httpClient.get(url).subscribe(data => {
      this.list = data;
      console.log(data);
    })
  }

  protected onBeerSelect(beer: string) {
    this.selectedBeer.emit(beer)
  }
}