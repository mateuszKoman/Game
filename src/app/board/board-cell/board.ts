import {BoardRow} from './board-row';
import {BoardCell} from './board-cell';

export class Board {

  activeCell: BoardCell;

  constructor(public rows: Array<BoardRow>,
              newActiveCell?: BoardCell) {
    if (!newActiveCell) {
      this.activeCell = rows[0].cells[0];
    } else {
      rows.forEach((row) => {
        row.cells.forEach((cell) => {
          cell.isActive = false;
          if (cell.column === newActiveCell.column &&
            cell.row === newActiveCell.row) {
            cell.isActive = true;
            this.activeCell = cell;
          }
        });
      });
    }
  }

  static create(rows: number, columns: number): Board {
    const boardRows: BoardRow[] = [];
    for (let i = 0; i < rows; i++) {
      const boardRow = new BoardRow([]);
      boardRows.push(boardRow);

      const randomColumn = Math.floor((Math.random() * columns));

      for (let j = 0; j < columns; j++) {
        const active = this.isActive(i, j);
        let isBlocked;

        if (active) {
          isBlocked = false;
        } else {
          isBlocked = j === randomColumn;
        }
        const boardCell = new BoardCell(i, j, active, isBlocked);
        boardRow.addCell(boardCell);
      }
    }
    return new Board(boardRows);
  }

  static isBlocked(row: number, column: number): boolean {
    return row === 1 && column === 1;
  }

  private static isActive(row: number, column: number): boolean {
    return row === 0 && column === 0;
  }

  markActiveCell(row: number, column: number): Board {
    this.activeCell = this.rows[row].cells[column];
    return new Board(this.rows, new BoardCell(row, column, true, false));
  }

  moveUp(): Board {
    if (this.activeCell.row > 0 &&
      !this.rows[this.activeCell.row - 1].cells[this.activeCell.column].isBlocked) {
      return this.markActiveCell(this.activeCell.row - 1, this.activeCell.column);
      // } else if (this.rows[this.activeCell.row - 1].cells[this.activeCell.column].isBlocked) {
      //     console.log('Nad Tobą jest zablokowana komórka');
    } else {
      return this;
    }
  }

  moveDown(): Board {
    if (this.activeCell.row < this.rows.length + 1 &&
      !this.rows[this.activeCell.row + 1].cells[this.activeCell.column].isBlocked) {
      return this.markActiveCell(this.activeCell.row + 1, this.activeCell.column);
    } else {
      return this;
    }
  }

  moveRight(): Board {
    if (this.activeCell.column < this.rows[0].cells.length - 1 &&
      !this.rows[this.activeCell.row].cells[this.activeCell.column + 1].isBlocked) {
      return this.markActiveCell(this.activeCell.row, this.activeCell.column + 1);
    } else {
      return this;
    }
  }

  moveLeft(): Board {
    if (this.activeCell.column > 0 &&
      !this.rows[this.activeCell.row].cells[this.activeCell.column - 1].isBlocked) {
      return this.markActiveCell(this.activeCell.row, this.activeCell.column - 1);
    } else {
      return this;

    }
  }
}

//
//   markPaintedCell(row: number, column: number): void {
//     const randomRow = Math.floor((Math.random() * row));
//     const randomColumn = Math.floor((Math.random() * column));
//     this.paintedCell = this.rows[randomRow].cells[randomColumn];
//   }
// }
