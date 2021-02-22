export class IllegalArgumentError extends Error {
  constructor (fieldName: string, arg: any) {
    super(`O argumento ${arg} para ${fieldName} é inválido.`)
    this.name = 'IllegalArgumentError'
  }
}
