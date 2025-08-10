import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FallbackModule } from './fallback/fallback.module';
import { NotFoundComponent } from '../../../design-system/src/app/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './UserModule',
      })
        .then((m) => m.UserModule)
        .catch((err) => {
          console.error('Error loading UserModule:', err);
          return import('./fallback/fallback.module').then(
            (m) => m.FallbackModule
          );
        }),
  },
  {
    path: 'sucesso',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './SuccessModule',
      })
        .then((m) => m.SuccessModule)
        .catch((err) => {
          console.error('Error loading SuccessModule:', err);
          return import('./fallback/fallback.module').then(
            (m) => m.FallbackModule
          );
        }),
  },
  {
    path: 'sucesso/usuario/:userId',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './SuccessModule',
      })
        .then((m) => m.SuccessModule)
        .catch((err) => {
          console.error('Error loading SuccessModule:', err);
          return import('./fallback/fallback.module').then(
            (m) => m.FallbackModule
          );
        }),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
