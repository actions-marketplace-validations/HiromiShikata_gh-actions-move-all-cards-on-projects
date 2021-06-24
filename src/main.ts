import * as core from '@actions/core'
import * as github from '@actions/github'
import {MoveAllCardsOnProjectUseCase} from './MoveAllCardsOnProjectUseCase'
import {OctokitGithubRepository} from './OctokitGithubRepository'

async function run(): Promise<void> {
  try {
    const projectName: string = core.getInput('project_name')
    const fromColumnName: string = core.getInput('from_column_name')
    const toColumnName: string = core.getInput('to_column_name')
    const githubToken: string = core.getInput('github_token')
    core.debug(
      `will move issues to ${toColumnName} from ${fromColumnName} on ${projectName}`
    )
    const usecase = new MoveAllCardsOnProjectUseCase(
      new OctokitGithubRepository(
        github.context.repo.owner,
        github.context.repo.repo,
        githubToken
      )
    )
    await usecase.execute(projectName, fromColumnName, toColumnName)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
