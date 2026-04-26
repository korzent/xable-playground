const { describe, it } = require('node:test');
const assert = require('node:assert');
const handler = require('./handler.js');

describe('API Handler', () => {
  it('should return 400 when intent is missing (expected after fix)', () => {
    const request = { body: { action: 'project' } };
    // This test FAILS initially because handler returns 200
    // After adding validation, this test will PASS with 400
    const result = handler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should return 400 when action is missing (expected after fix)', () => {
    const request = { body: { intent: 'create' } };
    // This test FAILS initially because handler returns 200
    // After adding validation, this test will PASS with 400
    const result = handler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should return 400 when body is null (expected after fix)', () => {
    const request = { body: null };
    // This test FAILS initially because handler crashes
    // After adding validation, this test will PASS with 400
    const result = handler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should work correctly with valid request', () => {
    const request = { body: { intent: 'create', action: 'project' } };
    const result = handler(request);
    assert.strictEqual(result.status, 200);
    assert.deepStrictEqual(result.body, { message: 'Project created' });
  });

  it('should work correctly with delete action', () => {
    const request = { body: { intent: 'delete', action: 'project' } };
    const result = handler(request);
    assert.strictEqual(result.status, 200);
    assert.deepStrictEqual(result.body, { message: 'Project deleted' });
  });
});
