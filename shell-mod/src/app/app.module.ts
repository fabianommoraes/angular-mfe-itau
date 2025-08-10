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
