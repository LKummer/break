const assert = require('assert').strict;
const { join } = require('path');

const sass = require('node-sass');
const sassTrue = require('sass-true');

describe('Assertions', () => {
  // In passing cases the assertions can be tested using True.
  describe('Passing Assertions', () => {
    const passingAssertions = join(__dirname, 'test-asserts.scss');
    sassTrue.runSass({ file: passingAssertions }, { describe, it });
  });

  // True can not test error output, so failing assertions are tested in
  // isolation.
  describe('Failing Assertions', () => {
    describe('key-exists', () => {
      it('Throws when key does not exist', () => {
        const data = `
@import 'src/asserts';
@include -break-assert-key-exists('key', ());`;
        assert.throws(() => {
          sass.renderSync({ data });
        });
      });
    });

    describe('breakpoint-bounds', () => {
      it('Throws when both bounds are not present', () => {
        const data = `
@import 'src/asserts';
@include -break-assert-breakpoint-bounds(());`;
        assert.throws(() => {
          sass.renderSync({ data });
        });
      });
    });

    describe('content', () => {
      it('Throws when no @content block is passed', () => {
        const data = `
@import 'src/asserts';
@include -break-assert-content;`;
        assert.throws(() => {
          sass.renderSync({ data });
        });
      });
    });
  });
});
