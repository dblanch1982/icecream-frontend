import { Routes } from '@angular/router';
import { IcecreamList } from './icecream-list/icecream-list';
import { MenuComponent } from './menu/menu';

export const routes: Routes = [  {
    path: '',
    component: MenuComponent,
    title: 'Eis Liste',
  },
  {
    path: 'icecream-list',
    component: IcecreamList,
    title: 'Eis Liste',
  },
    {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu',
  }
];

