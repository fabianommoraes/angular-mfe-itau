// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './aaaaappaaa/app.config';
// import { App } from './aaaaappaaa/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
