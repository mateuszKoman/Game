import {Component, HostListener} from '@angular/core';
import {Board} from './board-cell/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  private rowsOfOurBoard = 15;
  private columnsOfOurBoard = 15;

  board = Board.create(this.rowsOfOurBoard, this.columnsOfOurBoard);


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    console.log(event.key);

    switch (event.key) {
      case 'ArrowUp': {
        this.board = this.board.moveUp();

        break;

      }
      case 'ArrowDown': {
        this.board = this.board.moveDown();

        break;
      }
      case 'ArrowRight': {
        this.board = this.board.moveRight();

        break;
      }
      case 'ArrowLeft': {
        this.board = this.board.moveLeft();

        break;
      }
      default: {
        console.log('Użyj strzałek');
        break;
      }
    }
  }
}

