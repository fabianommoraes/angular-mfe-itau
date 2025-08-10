import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ButtonModule } from '../../../design-system/src/app/button/button.module';
import { TypographyModule } from '../../../design-system/src/app/typography/typography.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import * as Sentry from '@sentry/angular';

Sentry.init({
  dsn: 'https://fe0dd7b5aea1169c1a9a130165941b8c@o4509820702752768.ingest.us.sentry.io/4509820704129024',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    TypographyModule,
    FooterModule,
    HeaderModule,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class AppModule {}
