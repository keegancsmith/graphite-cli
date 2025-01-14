import chalk from 'chalk';

export const VALIDATION_HELPER_MESSAGE = [
  "Graphite's stacks differ from your git branch relations",
  'Consider running:',
  `-> '${chalk.yellow(
    'gt stack fix'
  )}' (MOST COMMON SOLUTION) to rebase stacked branches onto their parent's HEAD commits`,
  `-> '${chalk.yellow(
    'gt upstack onto <parent-branch>'
  )}' to move a specific branch (and it's stacked children) onto another branch to manually set the parent of a branch`,
].join('\n');
