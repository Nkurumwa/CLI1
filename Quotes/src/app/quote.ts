export class Quote {
  public showDescription: boolean;
  showAuthor: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.showDescription = false;
  }
}

