import {OctokitGithubRepository} from '../src/OctokitGithubRepository'

describe('OctokitGithubRepository', () => {
  const repo = new OctokitGithubRepository(
    'HiromiShikata',
    'gh-actions-move-all-cards-on-projects',
    String(process.env.GH_TOKEN)
  )
  test('getCards and move', async () => {
    const cards = await repo.getCards('test-project', 'In progress')
    expect(cards.length).toEqual(1)
    await repo.moveCard(cards[0], 'test-project', 'To do')
    const cardsAfterMove = await repo.getCards('test-project', 'In progress')
    expect(cardsAfterMove.length).toEqual(0)
    const todoCards = await repo.getCards('test-project', 'To do')
    await repo.moveCard(todoCards[0], 'test-project', 'In progress')
  })
})
