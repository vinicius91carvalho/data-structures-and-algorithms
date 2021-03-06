export class HotPotato {
  private readonly participants: string[]

  constructor (participants: string[]) {
    this.participants = participants
  }

  getItems (): string[] {
    return [...this.participants]
  }
}
