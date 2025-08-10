import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
