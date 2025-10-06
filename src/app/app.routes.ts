import { Routes } from '@angular/router';
import { IcecreamList } from './icecream-list/icecream-list';
import { Menu } from './menu/menu';

export const routes: Routes = [  {
    path: '',
    component: Menu,
    title: 'Eis Liste',
  },
  {
    path: 'icecream-list',
    component: IcecreamList,
    title: 'Eis Liste',
  },
    {
    path: 'menu',
    component: Menu,
    title: 'Menu',
  }
];

