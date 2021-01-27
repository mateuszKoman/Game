import {Component, Input} from '@angular/core';
import {BoardCell} from './board-cell';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent {

  @Input()
  cell: BoardCell;

  // isOnlyActive(): boolean {
  //
  //   let active = false;
  //
  //   if (this.cell.column === this.activeCell.column &&
  //       this.cell.row === this.activeCell.row &&
  //       this.cell.column === this.paintedCell.column &&
  //       this.cell.row === this.paintedCell.row ) {
  //     active = true;
  //   }
  //
  //   return active;
  // }
  //
  // isOnlyPainted(): boolean {
  //
  //   let painted = false;
  //
  //   if (this.cell.column === this.paintedCell.column &&
  //       this.cell.row === this.paintedCell.row &&
  //       !this.isOnlyActive()) {
  //     painted = true;
  //   }
  //   return painted;
  // }
  //
  // isActiveAndPainted(): boolean {
  //
  //   let isActiveAndPainted = false;
  //
  //   if (this.isOnlyActive() && this.isOnlyPainted()) {
  //     isActiveAndPainted = true;
  //   }
  //   return isActiveAndPainted;
  // }
}
