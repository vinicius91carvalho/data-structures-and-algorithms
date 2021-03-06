export class HotPotato {
  public _participants: string[]
  constructor (participants: string[]) {
    this._participants = participants
  }

  get participants (): string[] {
    return this._participants
  }

  set participants (participants: string[]) {}
}
