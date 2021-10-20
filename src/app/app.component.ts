import { Direction } from '@angular/cdk/bidi/directionality';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'controltm';
  direction: Direction = 'rtl';
  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en', 'fr']);
    translate.setDefaultLang('fr');
    this.direction = 'ltr';
  }
  switchLang(lang: string) {
    if (lang === 'ar') this.direction = 'rtl';
    else this.direction = 'ltr';
    this.translate.use(lang);
  }
}
