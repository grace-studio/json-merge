#!/usr/bin/env -S node

import { Command } from 'commander';
import chalk from 'chalk';
import { MergerService } from './services/MergerService.js';

(() => {
  console.log(chalk.green.bold('JSON merger'));
  const program = new Command();

  program.name('json-merge').usage('command [options]');

  program
    .command('merge', { isDefault: true })
    .option('-f, --files <files...>', 'input JSON files')
    .option('-o, --out <string>', 'output JSON file')
    .action((options) => {
      if (!options.files || options.files.length < 1) {
        console.error(chalk.yellow.bold('\nMissing options: input file\n'));
        program.help();
      }

      if (!options.out) {
        console.error(chalk.yellow.bold('\nMissing options: output file\n'));
        program.help();
      }

      MergerService.merge(options.files, options.out);
    });

  program.parse(process.argv);
})();
