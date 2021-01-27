export class BoardCell {

  constructor(public row: number,
              public column: number,
              public isActive: boolean,
              public isBlocked: boolean) {
  }
}
