const { join } = require('path');
const sassTrue = require('sass-true');

describe('Mixins', () => {
  const passingAssertions = join(__dirname, 'test-mixins.scss');
  sassTrue.runSass({ file: passingAssertions }, { describe, it });
});
