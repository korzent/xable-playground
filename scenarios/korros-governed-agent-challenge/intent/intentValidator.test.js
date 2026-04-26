const { describe, it } = require('node:test');
const assert = require('node:assert');
const IntentRequest = require('./intentRequest.js');
const IntentValidator = require('./intentValidator.js');

describe('Intent Validator', () => {
  it('should REJECT broad intent without target (expected after fix)', () => {
    const validator = new IntentValidator();
    const intent = new IntentRequest('improve', 'improve my project', null);
    
    // This test FAILS initially because validator accepts broad intent
    // After adding scope validation, this test will PASS with rejection
    const result = validator.validate(intent);
    assert.strictEqual(result.isValid, false);
  });

  it('should DETECT "improve my project" as too broad (expected after fix)', () => {
    const validator = new IntentValidator();
    const intent = new IntentRequest('improve', 'improve my project', null);
    
    // This test FAILS initially because validator doesn't detect broad scope
    // After adding breadth detection, this test will PASS
    const result = validator.checkScope(intent);
    assert.strictEqual(result.isBroad, true);
  });

  it('should REJECT intent with null target (expected after fix)', () => {
    const validator = new IntentValidator();
    const intent = new IntentRequest('improve', 'project', null);
    
    // This test FAILS initially because validator accepts null target
    // After adding target validation, this test will PASS with rejection
    const result = validator.checkTarget(intent);
    assert.strictEqual(result.hasTarget, false);
  });

  it('should IDENTIFY missing target in validation result (expected after fix)', () => {
    const validator = new IntentValidator();
    const intent = new IntentRequest('improve', 'project', null);
    
    // This test FAILS initially because missingTarget is always null
    // After adding target identification, this test will PASS
    const result = validator.validate(intent);
    assert.ok(result.missingTarget);
  });

  it('should ACCEPT specific intent with target (expected after fix)', () => {
    const validator = new IntentValidator();
    const intent = new IntentRequest('fix', 'dashboard', 'react-dashboard-null-crash');
    
    // This test FAILS initially because validator doesn't properly validate
    // After adding proper validation, this test will PASS
    const result = validator.validate(intent);
    assert.strictEqual(result.isValid, true);
    assert.strictEqual(result.isBroad, false);
    assert.strictEqual(result.hasTarget, true);
  });
});
