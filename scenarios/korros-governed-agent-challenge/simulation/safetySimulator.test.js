const { describe, it } = require('node:test');
const assert = require('node:assert');
const SafetySimulator = require('./safetySimulator.js');

describe('Safety Simulator', () => {
  it('should return BLOCKED when project state is missing (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const proposal = { intent: 'deploy' };
    const projectState = null;
    
    // This test FAILS initially because simulator returns SAFE when state is missing
    // After adding state check, this test will PASS with BLOCKED
    const result = simulator.simulate(proposal, projectState);
    assert.strictEqual(result.status, 'BLOCKED');
  });

  it('should return BLOCKED when project state is inconsistent (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const proposal = { intent: 'deploy' };
    const projectState = { connected: false, status: 'ready' }; // Inconsistent
    
    // This test FAILS initially because simulator doesn't check consistency
    // After adding consistency check, this test will PASS with BLOCKED
    const result = simulator.simulate(proposal, projectState);
    assert.strictEqual(result.status, 'BLOCKED');
  });

  it('should DETECT missing project state (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const projectState = null;
    
    // This test FAILS initially because checkProjectState returns isPresent: true
    // After adding state presence check, this test will PASS
    const result = simulator.checkProjectState(projectState);
    assert.strictEqual(result.isPresent, false);
  });

  it('should DETECT inconsistent project state (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const projectState = { connected: false, status: 'ready' };
    
    // This test FAILS initially because checkProjectState returns isConsistent: true
    // After adding consistency check, this test will PASS
    const result = simulator.checkProjectState(projectState);
    assert.strictEqual(result.isConsistent, false);
  });

  it('should IDENTIFY missing state fields (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const projectState = {};
    
    // This test FAILS initially because missingFields is always empty
    // After adding field identification, this test will PASS
    const result = simulator.checkProjectState(projectState);
    assert.ok(result.missingFields.length > 0);
  });

  it('should return SAFE for valid consistent project state (expected after fix)', () => {
    const simulator = new SafetySimulator();
    const proposal = { intent: 'fix' };
    const projectState = { connected: true, status: 'ready', verifiable: true };
    
    // This test FAILS initially because simulator doesn't properly validate
    // After adding proper validation, this test will PASS
    const result = simulator.simulate(proposal, projectState);
    assert.strictEqual(result.status, 'SAFE');
  });
});
