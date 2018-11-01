import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';

import { SearchPageModule } from '../search/search.module';
import { FavouritesPageModule } from '../favourites/favourites.module';
import { SettingsPageModule } from '../settings/settings.module';

/*const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];
*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
//    RouterModule.forChild(routes)
    TabsPageRoutingModule,
    SearchPageModule,
    FavouritesPageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
