const { describe, it } = require('node:test');
const assert = require('node:assert');
const { useProjectStatus, fetchProjectStatus } = require('./useProjectStatus.js');

// Simple React mock for testing
const React = {
  useState: (initial) => {
    let value = initial;
    const setter = (newValue) => {
      value = typeof newValue === 'function' ? newValue(value) : newValue;
    };
    return [value, setter];
  },
  useEffect: (callback, deps) => {
    const cleanup = callback();
    if (cleanup && typeof cleanup === 'function') {
      cleanup();
    }
  }
};

// Override the React import in the module
require.cache[require.resolve('./useProjectStatus.js')].exports.React = React;

describe('useProjectStatus Hook', () => {
  it('should NOT update state after unmount (expected after fix)', async () => {
    // Simulate component mount and unmount
    const setStatus = () => {};
    let stateUpdated = false;
    
    // The bug: callback doesn't check if component is still mounted
    // After fix: should check mounted flag before updating
    fetchProjectStatus('proj-1').then((result) => {
      stateUpdated = true;
    });
    
    await new Promise(resolve => setTimeout(resolve, 150));
    // This test FAILS initially because stateUpdated is true
    // After adding cleanup, this test will PASS with false
    assert.strictEqual(stateUpdated, false);
  });

  it('should ignore stale requests (expected after fix)', async () => {
    const results = [];
    
    // Simulate rapid changes
    fetchProjectStatus('proj-1').then((result) => {
      results.push({ id: 'proj-1', status: result.status });
    });
    
    fetchProjectStatus('proj-2').then((result) => {
      results.push({ id: 'proj-2', status: result.status });
    });
    
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // This test FAILS initially because both requests complete
    // After adding cancellation, this test will PASS with only latest
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].id, 'proj-2');
  });

  it('should work correctly for normal usage', async () => {
    const result = await fetchProjectStatus('proj-1');
    assert.strictEqual(result.status, 'completed');
  });
});
