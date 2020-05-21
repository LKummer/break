const { join } = require('path');
const sassTrue = require('sass-true');

describe('Mixins', () => {
  describe('No keys for highest and lowest', () => {
    const passingAssertions = join(__dirname, 'test-mixins.scss');
    sassTrue.runSass({ file: passingAssertions }, { describe, it });
  })

  describe('Null values for highest and lowest', () => {
    const passingAssertions = join(__dirname, 'test-mixins-null-edges.scss');
    sassTrue.runSass({ file: passingAssertions }, { describe, it });
  })
});
