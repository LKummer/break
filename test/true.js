const { join } = require('path');
const sassTrue = require('sass-true');

['test-break.scss']
  .map((file) => join(__dirname, file))
  .forEach((file) => {
    sassTrue.runSass({ file }, { describe, it });
  });
