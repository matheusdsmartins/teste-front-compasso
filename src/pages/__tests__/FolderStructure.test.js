// White box test to verify the suffix pattern for Page Component

import { join, resolve } from 'path';
import { lstatSync, readdirSync } from 'fs';
import paths from '../../../config/paths';

const componentsPath = resolve(paths.appSrc, 'pages/');
const ignoreDirectories = ['__tests__'];

const isDirectory = (name) =>
  lstatSync(join(componentsPath, name)).isDirectory();
const isFile = (path, name) => lstatSync(join(path, name)).isFile();

const isValidDirectoryName = (name) =>
  !ignoreDirectories.find((dirName) => dirName === name);

const readDirectory = (path) => readdirSync(path).map((name) => name);

const getDirectories = (path) =>
  readDirectory(path).filter(isDirectory).filter(isValidDirectoryName);

const getFiles = (path) =>
  readDirectory(path).filter((name) => isFile(path, name));

describe('Page Components White Box Tests', () => {
  describe('The component suffix patterns', () => {
    it("Should have 'Page' suffix", () => {
      const directories = getDirectories(componentsPath).concat(['.']);

      /**
       * It works in one directory level inside each
       * directory of 'components'
       */
      directories.forEach((dirName) => {
        const isJsRegex = new RegExp('.js$');

        const files = getFiles(`${componentsPath}/${dirName}`);
        const jsFiles = files.filter((file) => {
          return isJsRegex.test(file) && file !== 'index.js';
        });

        const suffix = 'Page.js';
        const suffixRegex = new RegExp(`${suffix}$`);

        jsFiles.forEach((fileName) => {
          expect(fileName).toMatch(suffixRegex);
        });
      });
    });
  });
});
