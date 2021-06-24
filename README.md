<p align="center">
  <a href="https://github.com/HiromiShikata/gh-actions-move-all-cards-on-projects/actions"><img alt="typescript-action status" src="https://github.com/HiromiShikata/gh-actions-move-all-cards-on-projects/workflows/build-test/badge.svg"></a>
</p>

# GitHub Actions Move All Cards On Projects
## Use cases
- clear 'In progress' column every day.

## Usage
```yaml
name: automation for global projects
on:
  schedule:
    - cron: '0 19 * * *'

jobs:
  clear-inprogress-column:
    runs-on: ubuntu-latest
    steps:
      - uses: HiromiShikata/gh-actions-move-all-cards-on-projects@v1.0.2
        with:
          project_name: 202106
          from_column_name: In progress
          to_column_name: To do
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

## Development

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

