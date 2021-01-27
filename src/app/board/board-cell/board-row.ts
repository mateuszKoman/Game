import {BoardCell} from './board-cell';

export class BoardRow {

  constructor(public cells: Array<BoardCell>) {
  }

  addCell(cell: BoardCell): void {
    this.cells.push(cell);
  }
}
