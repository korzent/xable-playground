const { describe, it } = require('node:test');
const assert = require('node:assert');
const ProjectState = require('./projectState.js');

describe('Shared Project State', () => {
  it('should REJECT state with connected: false + status: "ready" (expected after fix)', () => {
    const state = new ProjectState();
    state.update({ connected: false, status: 'ready' });
    // This test FAILS initially because state allows impossible combination
    // After adding validation, this test will PASS with validation error
    const isValid = state.validate();
    assert.strictEqual(isValid, false);
  });

  it('should REJECT state with hasMemory: false + agentSuggestion (expected after fix)', () => {
    const state = new ProjectState();
    state.update({ hasMemory: false, agentSuggestion: 'deploy' });
    // This test FAILS initially because state allows impossible combination
    // After adding validation, this test will PASS with validation error
    const isValid = state.validate();
    assert.strictEqual(isValid, false);
  });

  it('should NOT allow deploy when status is ready but not connected (expected after fix)', () => {
    const state = new ProjectState({ connected: false, status: 'ready' });
    // This test FAILS initially because canDeploy returns true
    // After adding validation, this test will PASS with false
    const canDeploy = state.canDeploy();
    assert.strictEqual(canDeploy, false);
  });

  it('should NOT show agent suggestion when hasMemory is false (expected after fix)', () => {
    const state = new ProjectState({ hasMemory: false, agentSuggestion: 'deploy' });
    // This test FAILS initially because showAgentSuggestion returns true
    // After adding prerequisite checks, this test will PASS with false
    const showSuggestion = state.showAgentSuggestion();
    assert.strictEqual(showSuggestion, false);
  });

  it('should work correctly with valid state combinations', () => {
    const state = new ProjectState({ connected: true, status: 'ready', hasMemory: true });
    assert.strictEqual(state.validate(), true);
    assert.strictEqual(state.canDeploy(), true);
  });
});
