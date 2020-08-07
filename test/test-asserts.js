const assert = require('assert').strict;

const { sassFile } = require('./utilities');

describe('Assertions', () => {
  describe('Key Exists', () => {
    it('Passes when key is valid', () => {
      sassFile('asserts/key-exists-exists.scss');
    });
    it('Throws when the key does not exist', () => {
      assert.throws(() => {
        sassFile('asserts/key-exists-no-key.scss');
      });
    });
  });

  describe('Breakpoint Bounds', () => {
    it('Passes when both bounds exist', () => {
      sassFile('asserts/breakpoint-bounds-both.scss');
    });
    it('Passes when only lower bound exists', () => {
      sassFile('asserts/breakpoint-bounds-lower.scss');
    });
    it('Passes when only upper bound exists', () => {
      sassFile('asserts/breakpoint-bounds-upper.scss');
    });
    it('Throws when no bounds exist', () => {
      assert.throws(() => {
        sassFile('asserts/breakpoint-bounds-none.scss');
      });
    });
    it('Throws when the type is incorrect', () => {
      assert.throws(() => {
        sassFile('asserts/breakpoint-bounds-not-map.scss');
      });
    });
  });

  describe('Content', () => {
    it('Passes when passed @content', () => {
      sassFile('asserts/content.scss');
    });
    it('Throws when there is no @content', () => {
      assert.throws(() => {
        sassFile('asserts/content-none.scss');
      });
    });
  });
});
