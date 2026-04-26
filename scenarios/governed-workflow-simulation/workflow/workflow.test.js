const { describe, it } = require('node:test');
const assert = require('node:assert');
const IntentProcessor = require('./intent.js');
const SuggestionGenerator = require('./suggestion.js');
const ContributionRecord = require('./contribution.js');
const Simulator = require('./simulation.js');

describe('Governed Workflow', () => {
  it('should NOT generate suggestion when memory is empty (expected after fix)', () => {
    const generator = new SuggestionGenerator();
    const result = generator.generate('fix', null);
    // This test FAILS initially because suggestion is generated even with empty memory
    // After adding memory check, this test will PASS with NO_SUGGESTION
    assert.strictEqual(result.suggestion, 'NO_SUGGESTION');
  });

  it('should CITE work examples when memory has relevant entries (expected after fix)', () => {
    const generator = new SuggestionGenerator();
    const memory = { entries: [{ id: 'work-001', type: 'fix' }] };
    const result = generator.generate('fix', memory);
    // This test FAILS initially because citedWork is always null
    // After adding work citation, this test will PASS with work ID
    assert.ok(result.citedWork);
  });

  it('should return BLOCKED when context memory is missing (expected after fix)', () => {
    const simulator = new Simulator();
    const proposal = { intent: 'deploy' };
    const context = { memory: null };
    const result = simulator.simulate(proposal, context);
    // This test FAILS initially because simulation returns SAFE even without memory
    // After adding context check, this test will PASS with BLOCKED
    assert.strictEqual(result.status, 'BLOCKED');
  });

  it('should include human-readable reason in contribution (expected after fix)', () => {
    const record = new ContributionRecord();
    const proposal = { intent: 'fix' };
    const simulationResult = { status: 'SAFE' };
    const contribution = record.create(proposal, simulationResult);
    // This test FAILS initially because reason is always null
    // After adding reason generation, this test will PASS with reason
    assert.ok(contribution.reason);
  });

  it('should NOT create contribution when simulation is BLOCKED (expected after fix)', () => {
    const record = new ContributionRecord();
    const proposal = { intent: 'deploy' };
    const simulationResult = { status: 'BLOCKED' };
    // This test FAILS initially because contribution is created even when blocked
    // After adding safety check, this test will PASS without creating record
    const contribution = record.create(proposal, simulationResult);
    assert.strictEqual(contribution, null);
  });

  it('should validate intent before processing (expected after fix)', () => {
    const processor = new IntentProcessor();
    const result = processor.validate('invalid-intent');
    // This test FAILS initially because all intents are considered valid
    // After adding validation, this test will PASS with false
    assert.strictEqual(result, false);
  });
});
