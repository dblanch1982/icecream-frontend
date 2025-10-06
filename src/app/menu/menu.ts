import { Component } from '@angular/core';
import { IcecreamList } from '../icecream-list/icecream-list';

@Component({
  selector: 'app-menu',
  imports: [IcecreamList],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
