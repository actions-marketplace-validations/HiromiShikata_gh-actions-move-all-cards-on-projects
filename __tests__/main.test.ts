import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500'
  process.env['INPUT_PROJECT_NAME'] = 'test-project'
  process.env['INPUT_FROM_COLUMN_NAME'] = 'In progress'
  process.env['INPUT_TO_COLUMN_NAME'] = 'To do'
  process.env['INPUT_GITHUB_TOKEN'] = process.env.GH_TOKEN
  process.env['GITHUB_REPOSITORY'] =
    'HiromiShikata/gh-actions-move-all-cards-on-projects'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
  process.env['INPUT_FROM_COLUMN_NAME'] = 'To do'
  process.env['INPUT_TO_COLUMN_NAME'] = 'In progress'
  console.log(cp.execFileSync(np, [ip], options).toString())
})
