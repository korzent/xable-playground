const { describe, it } = require('node:test');
const assert = require('node:assert');
const Dashboard = require('./Dashboard.js');

describe('Dashboard Component', () => {
  it('should NOT crash when projectStatus is null (expected after fix)', () => {
    const projectStatus = null;
    // This test FAILS initially because Dashboard crashes on null
    // After adding null checks, this test will PASS
    assert.doesNotThrow(() => new Dashboard(projectStatus));
  });

  it('should NOT crash when projectStatus is incomplete (expected after fix)', () => {
    const projectStatus = { connected: true };
    // This test FAILS initially because Dashboard crashes on incomplete data
    // After adding fallback handling, this test will PASS
    assert.doesNotThrow(() => new Dashboard(projectStatus));
  });

  it('should NOT show deploy button when status is ready but not connected (expected after fix)', () => {
    const projectStatus = { connected: false, status: 'ready', hasMemory: false };
    const dashboard = new Dashboard(projectStatus);
    const rendered = dashboard.render();
    // This test FAILS initially because deploy button shows even when not connected
    // After adding state validation, this test will PASS
    assert.strictEqual(rendered.showDeploy, false);
  });

  it('should NOT show agent suggestion when hasMemory is false (expected after fix)', () => {
    const projectStatus = { connected: true, status: 'ready', hasMemory: false, agentSuggestion: 'deploy' };
    const dashboard = new Dashboard(projectStatus);
    const rendered = dashboard.render();
    // This test FAILS initially because agent suggestion shows even without memory
    // After adding prerequisite checks, this test will PASS
    assert.strictEqual(rendered.message.includes('deploy'), false);
  });

  it('should render safe fallback when API data is incomplete (expected after fix)', () => {
    const projectStatus = { connected: true };
    const dashboard = new Dashboard(projectStatus);
    // This test FAILS initially because Dashboard crashes
    // After adding fallback handling, this test will PASS
    const rendered = dashboard.render();
    assert.ok(rendered.message);
  });

  it('should work correctly with complete valid data', () => {
    const projectStatus = { connected: true, status: 'ready', hasMemory: true, agentSuggestion: 'deploy' };
    const dashboard = new Dashboard(projectStatus);
    const rendered = dashboard.render();
    assert.strictEqual(rendered.showDeploy, true);
    assert.strictEqual(rendered.message, 'Safe to deploy');
  });
});
