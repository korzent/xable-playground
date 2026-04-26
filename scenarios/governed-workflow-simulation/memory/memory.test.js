const { describe, it } = require('node:test');
const assert = require('node:assert');
const sampleMemory = require('./sampleMemory.js');

describe('Sample Memory', () => {
  it('should have valid profile', () => {
    assert.ok(sampleMemory.profile);
    assert.strictEqual(sampleMemory.profile.userId, 'demo-user');
  });

  it('should have work history entries', () => {
    assert.ok(sampleMemory.workHistory);
    assert.strictEqual(sampleMemory.workHistory.length, 3);
  });

  it('should find work by type', () => {
    const fixWork = sampleMemory.workHistory.filter(w => w.type === 'fix');
    assert.strictEqual(fixWork.length, 2);
  });

  it('should provide work IDs for citation', () => {
    const work = sampleMemory.workHistory[0];
    assert.ok(work.id);
  });
});
