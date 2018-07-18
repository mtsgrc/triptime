import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CategoriesPage } from '../categories/categories';
import { PollPage } from '../poll/poll';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = CategoriesPage;
  tab4Root: any = PollPage;
  constructor() {

  }
}
