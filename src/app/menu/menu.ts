import { Component, OnInit } from '@angular/core';
import { Eisdiele } from '../model/eisdiele.model';
import { EisdieleService } from '../service/eisdiele';
import { CurrencyPipe, JsonPipe, NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'app-eisdiele',
  templateUrl: './menu.html',
  imports: [CurrencyPipe],

})
export class MenuComponent implements OnInit {
  eisdiele?: Eisdiele;

  constructor(private eisdieleService: EisdieleService) {}

  ngOnInit(): void {
    this.eisdieleService.getEisdiele().subscribe(data => {
      this.eisdiele = data;
    });
  }
}
