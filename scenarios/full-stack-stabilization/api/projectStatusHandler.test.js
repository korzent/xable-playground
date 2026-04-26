const { describe, it } = require('node:test');
const assert = require('node:assert');
const projectStatusHandler = require('./projectStatusHandler.js');

describe('Project Status API Handler', () => {
  it('should return 400 when repoId is missing (expected after fix)', () => {
    const request = { body: { status: 'ready', connected: true } };
    // This test FAILS initially because handler returns 200
    // After adding validation, this test will PASS with 400
    const result = projectStatusHandler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should return 400 when status is missing (expected after fix)', () => {
    const request = { body: { repoId: 'repo-1', connected: true } };
    // This test FAILS initially because handler returns 200
    // After adding validation, this test will PASS with 400
    const result = projectStatusHandler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should return 400 when connected is missing (expected after fix)', () => {
    const request = { body: { repoId: 'repo-1', status: 'ready' } };
    // This test FAILS initially because handler returns 200
    // After adding validation, this test will PASS with 400
    const result = projectStatusHandler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should return 400 when request.body is null (expected after fix)', () => {
    const request = { body: null };
    // This test FAILS initially because handler crashes
    // After adding validation, this test will PASS with 400
    const result = projectStatusHandler(request);
    assert.strictEqual(result.status, 400);
  });

  it('should work correctly with valid request', () => {
    const request = { body: { repoId: 'repo-1', status: 'ready', connected: true } };
    const result = projectStatusHandler(request);
    assert.strictEqual(result.status, 200);
    assert.strictEqual(result.body.message, 'Project is ready to deploy');
  });
});
