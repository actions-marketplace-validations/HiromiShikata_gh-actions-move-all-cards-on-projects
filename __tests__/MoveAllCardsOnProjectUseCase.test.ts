import {
  Card,
  MoveAllCardsOnProjectUseCase
} from '../src/MoveAllCardsOnProjectUseCase'

describe('MoveAllCardsOnProjectUseCase', () => {
  test('execute', async () => {
    const repo = {
      getCards: jest.fn(
        (projectName: string, columnName: string): Promise<Card[]> =>
          Promise.resolve([new Card('cardId', 'title', 'columnId')])
      ),
      moveCard: jest.fn(
        (
          card: Card,
          projectName: string,
          toColumnName: string
        ): Promise<void> => Promise.resolve()
      )
    }
    const usecase = new MoveAllCardsOnProjectUseCase(repo)
    await usecase.execute('test-project', 'In progress', 'To do')
    expect(repo.getCards.mock.calls.length).toEqual(1)
    expect(repo.getCards.mock.calls[0][0]).toEqual('test-project')
    expect(repo.getCards.mock.calls[0][1]).toEqual('In progress')
    expect(repo.moveCard.mock.calls.length).toEqual(1)
    expect(repo.moveCard.mock.calls[0][0].cardId).toEqual('cardId')
    expect(repo.moveCard.mock.calls[0][0].title).toEqual('title')
    expect(repo.moveCard.mock.calls[0][0].columnId).toEqual('columnId')
    expect(repo.moveCard.mock.calls[0][1]).toEqual('test-project')
    expect(repo.moveCard.mock.calls[0][2]).toEqual('To do')
  })
})
