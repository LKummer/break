const assert = require('assert').strict;

const { sassFile, fileContent } = require('./utilities');

describe('Mixins', () => {
  describe('Media Under', () => {
    it('Works', () => {
      assert.equal(
        sassFile('mixins/under.scss'),
        fileContent('mixins/under.css')
      );
    });
    it('Omits Unnecessary Queries', () => {
      assert.equal(
        sassFile('mixins/under-none.scss'),
        fileContent('mixins/under-none.css')
      );
    });
  });

  describe('Media Over', () => {
    it('Works', () => {
      assert.equal(
        sassFile('mixins/over.scss'),
        fileContent('mixins/over.css')
      );
    });
    it('Omits Unnecessary Queries', () => {
      assert.equal(
        sassFile('mixins/over-none.scss'),
        fileContent('mixins/over-none.css')
      );
    });
  });

  describe('Media Between', () => {
    it('Works', () => {
      assert.equal(
        sassFile('mixins/between.scss'),
        fileContent('mixins/between.css')
      );
    });
    it('Works with the same breakpoint for both bounds', () => {
      assert.equal(
        sassFile('mixins/between-single.scss'),
        fileContent('mixins/between-single.css')
      );
    });
    it('Omits lower bound when not required', () => {
      assert.equal(
        sassFile('mixins/between-omit-lower.scss'),
        fileContent('mixins/between-omit-lower.css')
      );
    });
    it('Omits upper bound when not required', () => {
      assert.equal(
        sassFile('mixins/between-omit-upper.scss'),
        fileContent('mixins/between-omit-upper.css')
      );
    });
    it('Omits both bounds when not required', () => {
      assert.equal(
        sassFile('mixins/between-omit-both.scss'),
        fileContent('mixins/between-omit-both.css')
      );
    });
  });

  describe('Media Only', () => {
    it('Works', () => {
      assert.equal(
        sassFile('mixins/only.scss'),
        fileContent('mixins/only.css')
      );
    });
  });
});
