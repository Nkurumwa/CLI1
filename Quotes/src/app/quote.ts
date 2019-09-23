export class Quote {
  public showDescription: boolean;
  showAuthor: boolean;
  constructor(public id: number, public name: string,  public author: string, public upvote:number, public downvote:number, public description: string, public completeDate: Date) {
    this.showDescription = false;
  }
}

