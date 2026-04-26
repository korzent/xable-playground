const { describe, it } = require('node:test');
const assert = require('node:assert');

// Simple mock for React component testing
function Dashboard({ github }) {
  if (!github || !github.repositories) {
    throw new Error('Cannot read properties of undefined (reading \'length\')');
  }
  const repoCount = github.repositories.length;
  const repoList = github.repositories.map(repo => repo.name);
  return { repoCount, repoList };
}

describe('Dashboard Component', () => {
  it('should NOT crash when github is null (expected after fix)', () => {
    const github = null;
    // This test FAILS initially because the code crashes
    // After adding null checks, this test will PASS
    assert.doesNotThrow(
      () => Dashboard({ github })
    );
  });

  it('should NOT crash when github.repositories is missing (expected after fix)', () => {
    const github = { user: 'testuser' };
    // This test FAILS initially because the code crashes
    // After adding null checks, this test will PASS
    assert.doesNotThrow(
      () => Dashboard({ github })
    );
  });

  it('should work correctly when github data is present', () => {
    const github = {
      repositories: [
        { id: 1, name: 'repo1' },
        { id: 2, name: 'repo2' }
      ]
    };
    const result = Dashboard({ github });
    assert.strictEqual(result.repoCount, 2);
    assert.deepStrictEqual(result.repoList, ['repo1', 'repo2']);
  });

  it('should handle empty repositories array (expected fix behavior)', () => {
    const github = { repositories: [] };
    const result = Dashboard({ github });
    assert.strictEqual(result.repoCount, 0);
    assert.deepStrictEqual(result.repoList, []);
  });
});
