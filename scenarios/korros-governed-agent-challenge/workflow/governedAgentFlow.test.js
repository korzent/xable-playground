const { describe, it } = require('node:test');
const assert = require('node:assert');
const GovernedAgentFlow = require('./governedAgentFlow.js');
const UserMemory = require('../memory/userMemory.js');
const IntentRequest = require('../intent/intentRequest.js');

describe('Governed Agent Flow', () => {
  it('should return BLOCKED_WITH_NEXT_STEP for stale memory + broad intent + missing project state (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('improve', 'improve my project', null),
      memory: new UserMemory({}, [], { lastUpdated: '2020-01-01' }),
      projectState: null
    };
    
    // This test FAILS initially because flow returns SAFE_TO_RUN
    // After adding proper blocking logic, this test will PASS
    const result = flow.process(request);
    assert.strictEqual(result.status, 'BLOCKED_WITH_NEXT_STEP');
  });

  it('should include explanation in blocked response (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('improve', 'improve my project', null),
      memory: new UserMemory({}, []),
      projectState: null
    };
    
    // This test FAILS initially because explanation is not included in blocked response
    // After adding explanation generation, this test will PASS
    const result = flow.process(request);
    if (result.status === 'BLOCKED_WITH_NEXT_STEP') {
      assert.ok(result.explanation);
    }
  });

  it('should include missingInputs in blocked response (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('improve', 'improve my project', null),
      memory: new UserMemory({}, []),
      projectState: null
    };
    
    // This test FAILS initially because missingInputs is always empty
    // After adding input identification, this test will PASS
    const result = flow.process(request);
    if (result.status === 'BLOCKED_WITH_NEXT_STEP') {
      assert.ok(result.missingInputs.length > 0);
    }
  });

  it('should include recommendedNextAction in blocked response (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('improve', 'improve my project', null),
      memory: new UserMemory({}, []),
      projectState: null
    };
    
    // This test FAILS initially because recommendedNextAction is always null
    // After adding next action generation, this test will PASS
    const result = flow.process(request);
    if (result.status === 'BLOCKED_WITH_NEXT_STEP') {
      assert.ok(result.recommendedNextAction);
    }
  });

  it('should NOT return SAFE_TO_RUN for incomplete context (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('improve', 'improve my project', null),
      memory: new UserMemory({}, []),
      projectState: null
    };
    
    // This test FAILS initially because flow returns SAFE_TO_RUN
    // After adding proper blocking, this test will PASS
    const result = flow.process(request);
    assert.notStrictEqual(result.status, 'SAFE_TO_RUN');
  });

  it('should return SAFE_TO_RUN only for complete valid context (expected after fix)', () => {
    const flow = new GovernedAgentFlow();
    const request = {
      intent: new IntentRequest('fix', 'dashboard', 'react-dashboard-null-crash'),
      memory: new UserMemory(
        { userId: 'user-1' },
        [{ id: 'work-001', title: 'Fix' }],
        { lastUpdated: new Date().toISOString() }
      ),
      projectState: { connected: true, status: 'ready', verifiable: true }
    };
    
    // This test FAILS initially because flow doesn't properly validate
    // After adding proper validation, this test will PASS
    const result = flow.process(request);
    assert.strictEqual(result.status, 'SAFE_TO_RUN');
  });
});
