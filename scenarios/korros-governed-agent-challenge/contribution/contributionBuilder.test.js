const { describe, it } = require('node:test');
const assert = require('node:assert');
const ContributionBuilder = require('./contributionBuilder.js');

describe('Contribution Builder', () => {
  it('should REJECT contribution without reason (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = builder.build({ intent: 'fix' }, {});
    
    // This test FAILS initially because builder accepts contribution without reason
    // After adding reason validation, this test will PASS with rejection
    const result = builder.validate(contribution);
    assert.strictEqual(result.isValid, false);
  });

  it('should REJECT contribution without source reference (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = builder.build({ intent: 'fix' }, {});
    
    // This test FAILS initially because builder accepts contribution without source
    // After adding source validation, this test will PASS with rejection
    const result = builder.validate(contribution);
    assert.strictEqual(result.isValid, false);
  });

  it('should DETECT missing reason (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = builder.build({ intent: 'fix' }, {});
    
    // This test FAILS initially because checkReason always returns hasReason: true
    // After adding reason check, this test will PASS
    const result = builder.checkReason(contribution);
    assert.strictEqual(result.hasReason, false);
  });

  it('should DETECT missing source reference (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = builder.build({ intent: 'fix' }, {});
    
    // This test FAILS initially because checkSourceReference always returns hasSource: true
    // After adding source check, this test will PASS
    const result = builder.checkSourceReference(contribution);
    assert.strictEqual(result.hasSource, false);
  });

  it('should IDENTIFY missing fields in validation result (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = builder.build({ intent: 'fix' }, {});
    
    // This test FAILS initially because missingFields is always empty
    // After adding field identification, this test will PASS
    const result = builder.validate(contribution);
    assert.ok(result.missingFields.length > 0);
  });

  it('should ACCEPT valid contribution with reason and source (expected after fix)', () => {
    const builder = new ContributionBuilder();
    const contribution = {
      id: 'contrib-1',
      proposal: { intent: 'fix' },
      reason: 'Fix null crash in dashboard',
      sourceReference: 'work-001',
      createdAt: new Date().toISOString()
    };
    
    // This test FAILS initially because validator doesn't properly validate
    // After adding proper validation, this test will PASS
    const result = builder.validate(contribution);
    assert.strictEqual(result.isValid, true);
  });
});
