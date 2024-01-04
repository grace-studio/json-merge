import chalk from 'chalk';
import { FileUtil } from '../utils/FileUtil.js';

const merge = (inputFiles: string[], outputFile: string) => {
  const fileData = inputFiles
    .map(FileUtil.readFile)
    .filter(Boolean)
    .map((data) => JSON.parse(data as string));

  if (!fileData || fileData.length < 1) {
    console.error('invalid input files');
    return;
  }

  const outputPath = outputFile.split('/').slice(0, -1).join('/');
  const outputFileName = outputFile.split('/').at(-1);

  if (!outputFileName) {
    console.error('invalid output file');
    return;
  }

  let output = {};
  fileData.forEach((data) => {
    output = { ...output, ...data };
  });
  const content = JSON.stringify(output, null, 2);

  FileUtil.writeFile(outputPath, outputFileName, content);

  console.log(chalk.green('\nSuccessfully merged files!'));
};

export const MergerService = {
  merge,
};
