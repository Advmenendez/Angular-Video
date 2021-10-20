import { Component, Input } from '@angular/core';
import { NavigationElement } from './core/models/core';
import { Title } from './shared/components/title-component/model/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() titles: Title = {
    class: 'desktop',
  };

  public navigation: NavigationElement[] = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'News',
      link: '/news',
    },
    {
      name: 'Tech',
      link: '/tech',
    },
    {
      name: 'Sports',
      link: '/sports',
    },
    {
      name: 'Music',
      link: '/music',
    },
    {
      name: 'Movies',
      link: '/movies',
    },
    {
      name: 'Videogames',
      link: '/videogames',
    },
    {
      name: 'About',
      link: '/about',
    },
  ];
}
