const { describe, it } = require('node:test');
const assert = require('node:assert');
const UserMemory = require('./userMemory.js');
const MemoryResolver = require('./memoryResolver.js');

describe('Memory Resolver', () => {
  it('should REJECT stale memory (expected after fix)', () => {
    const resolver = new MemoryResolver();
    const oldDate = new Date('2020-01-01').toISOString();
    const memory = new UserMemory({}, [], { lastUpdated: oldDate });
    
    // This test FAILS initially because resolver accepts stale memory
    // After adding staleness checks, this test will PASS with rejection
    const result = resolver.checkStaleness(memory);
    assert.strictEqual(result.isStale, true);
  });

  it('should REJECT empty work history (expected after fix)', () => {
    const resolver = new MemoryResolver();
    const memory = new UserMemory({}, []);
    
    // This test FAILS initially because resolver accepts empty work history
    // After adding sufficiency checks, this test will PASS with rejection
    const result = resolver.checkSufficiency(memory);
    assert.strictEqual(result.isSufficient, false);
  });

  it('should IDENTIFY missing inputs for insufficient memory (expected after fix)', () => {
    const resolver = new MemoryResolver();
    const memory = new UserMemory({}, []);
    
    // This test FAILS initially because missingInputs is always empty
    // After adding input identification, this test will PASS with list
    const result = resolver.resolve(memory);
    assert.ok(result.missingInputs.length > 0);
  });

  it('should ACCEPT valid memory (expected after fix)', () => {
    const resolver = new MemoryResolver();
    const memory = new UserMemory(
      { userId: 'user-1' },
      [{ id: 'work-001', title: 'Fix' }],
      { lastUpdated: new Date().toISOString() }
    );
    
    // This test FAILS initially because resolver doesn't properly validate
    // After adding proper validation, this test will PASS
    const result = resolver.resolve(memory);
    assert.strictEqual(result.isFresh, true);
    assert.strictEqual(result.isSufficient, true);
  });
});
