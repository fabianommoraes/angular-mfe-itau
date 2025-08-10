import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sucesso',
    loadChildren: () =>
      import('./success/success.module').then((m) => m.SuccessModule),
  },
  {
    path: 'sucesso/usuario/:userId',
    loadChildren: () =>
      import('./success/success.module').then((m) => m.SuccessModule),
  },
];
