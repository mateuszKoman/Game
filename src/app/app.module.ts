import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BoardComponent} from './board/board.component';
import {BoardCellComponent} from './board/board-cell/board-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
