# Full-Stack Stabilization

**Status: ❌ Broken by design**

Run:
```bash
npm run scenario:full-stack
```

You should see failing tests. Your goal is to fix the issue safely.

## Problem

A dashboard, API handler, and shared state model disagree about project status. This creates misleading "safe to run" messaging:

- **Frontend assumes API always returns complete repo status** - Crashes or renders incorrectly when data is incomplete
- **API accepts malformed repo status requests** - Proceeds with invalid input instead of returning 400
- **Shared state allows impossible states** - Permits combinations like:
  - `connected: false + status: "ready"`
  - `hasMemory: false + agentSuggestion: "deploy"`

Combined behavior creates a false sense of safety where the system suggests actions that are not actually safe.

## Why It Matters

In a real system, inconsistent state across layers can lead to:
- Users taking actions based on misleading information
- Deployment of code that isn't actually ready
- Loss of trust in the system's safety signals

## Expected Safe Fix

A safe fix should:
1. **API layer**: Validate repo status requests and return 400 for malformed input
2. **Frontend layer**: Render safe fallback states when API data is incomplete
3. **Shared state layer**: Reject impossible state combinations through validation
4. **Cross-layer consistency**: Ensure agent suggestions only show when prerequisites are met

This is not a single-file fix. Xable should reason across frontend, API, and shared state to ensure consistent behavior.

## Files

- `frontend/Dashboard.js` - Broken dashboard component
- `frontend/Dashboard.test.js` - Test demonstrating the issue
- `api/projectStatusHandler.js` - Broken API handler
- `api/projectStatusHandler.test.js` - Test demonstrating the issue
- `shared/projectState.js` - Broken shared state model
- `shared/projectState.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

## Systems Involved

- Frontend (Dashboard)
- API (projectStatusHandler)
- Shared State (projectState)

## Xable Concepts

- Safe simulation
- State consistency
- Fallback behavior
