import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app.header.component/app.header.component';
import { AppShoppingList } from './components/app.shopping.list/app.shopping.list';
import { AppRecipeItem } from './components/app.recipe.item/app.recipe.item';
import { AppRecipeList } from './components/app.recipe.list/app.recipe.list';
import { AppRecipeDetail } from './components/app.shopping.detail/app.shopping.detail';
import { AppShoppingListEdit } from './components/app.shopping.list.edit/app.shopping.list.edit';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppShoppingList,
    AppShoppingListEdit,
    AppRecipeItem,
    AppRecipeList,
    AppRecipeDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
