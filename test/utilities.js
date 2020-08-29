const { resolve } = require('path');
const { readFileSync } = require('fs');

const sass = require('sass');

/**
 * Get processed, stripped output from a Sass file.
 *
 * Used to test Sass files.
 * The output is stripped from whitespace and line endings for easy comparison
 * against expected CSS snippets.
 *
 * @param {string} file File to process. Relative to the execution directory.
 * @return {string} Processed Sass output of the file contents.
 */
module.exports.sassFile = function (file) {
  const path = resolve(__dirname, file);
  const result = sass.renderSync({ file: path });
  return stripForComparison(result.css.toString());
};

/**
 * Get stripeed file contents.
 *
 * Used for reading expected CSS files.
 * The content is stripped from whitespace and line endings for easy comparison
 * against Sass output.
 *
 * @param {string} file File to open.
 * @return {string} Content of the chosen file.
 */
module.exports.fileContent = function (file) {
  const path = resolve(__dirname, file);
  const content = readFileSync(path, { encoding: 'utf-8' });
  return stripForComparison(content);
};

/**
 * Strip whitespace and line endings for comparison.
 *
 * Formatting and OS differences cause issues when comparing expected CSS files
 * to Sass output. Stripping spaces and line endings makes comparisons more robust.
 *
 * @param {string} css CSS from Sass or an expected file
 * @return {string} CSS stripped from whitespace and line endings
 */
function stripForComparison(css) {
  return css.replace(/[\r\n\s]/g, '');
}
