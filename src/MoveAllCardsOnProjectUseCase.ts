export class MoveAllCardsOnProjectUseCase {
  constructor(readonly githubRepository: GithubRepository) {}

  execute = async (
    projectName: string,
    fromColumnName: string,
    toColumnName: string
  ): Promise<void> => {
    const cards = await this.githubRepository.getCards(
      projectName,
      fromColumnName
    )
    for (const card of cards) {
      await this.githubRepository.moveCard(card, projectName, toColumnName)
    }
  }
}

export class Card {
  constructor(
    readonly cardId: string,
    readonly title: string,
    readonly columnId: string
  ) {}
}

export interface GithubRepository {
  getCards(projectName: string, columnName: string): Promise<Card[]>

  moveCard(card: Card, projectName: string, toColumnName: string): Promise<void>
}
