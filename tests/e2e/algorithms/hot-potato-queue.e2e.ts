import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { QueueArray } from '@/data-structures/queues/queue-array'

type SutType = {
  sut: HotPotatoQueue
  participants: string[]
}

const makeSut = (): SutType => {
  const participants = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
  const queue = new QueueArray()
  const sut = new HotPotatoQueue(queue, queue, queue)
  return {
    sut,
    participants
  }
}

describe('HotPotatoQueue', () => {
  test('Should return all eliminated participants until the last remains', () => {
    const { sut, participants } = makeSut()
    const { eliminated: participantsEliminated } = sut.play(participants, 7)
    expect(participantsEliminated).toEqual(['Camila', 'Jack', 'Carl', 'Ingrid'])
  })

  test('Should return the eliminated participants until the last remains passing 2 as total steps', () => {
    const { sut, participants } = makeSut()
    const { eliminated: participantsEliminated } = sut.play(participants, 2)
    expect(participantsEliminated).toEqual(['Camila', 'John', 'Carl', 'Jack'])
  })

  test('Should return the winner when passing 1 as total steps', () => {
    const { sut, participants } = makeSut()
    const result = sut.play(participants, 2)
    expect(result.winner).toEqual('Ingrid')
  })
})
