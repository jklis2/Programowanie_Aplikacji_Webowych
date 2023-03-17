import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected selectedBeer: any

  onBeerSelect(beer: any) {
    this.selectedBeer = beer
  }
}