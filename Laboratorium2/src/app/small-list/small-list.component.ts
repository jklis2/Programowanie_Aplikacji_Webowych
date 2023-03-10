import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-list',
  templateUrl: './small-list.component.html',
  styleUrls: ['./small-list.component.scss']
})
export class SmallListComponent {
  @Input() opis = ''
  cena = 200
}
