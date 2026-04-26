# Async State Race

**Status: ❌ Broken by design**

Run:
```bash
npm test
```

You should see failing tests. Your goal is to fix the issue safely.

## Problem

The `useProjectStatus` hook updates state after the component unmounts or when a stale request completes. This happens because the async callback doesn't check if the component is still mounted before updating state.

## Why It Matters

When a component unmounts before an async operation completes, attempting to update state causes:
- React warnings about memory leaks
- Potential runtime errors
- Stale data being applied to already-unmounted components
- Unpredictable behavior in the application

## Expected Safe Fix

A safe fix should:
1. Track whether the component is mounted using a cleanup flag
2. Cancel pending async operations on unmount
3. Check the mounted flag before updating state
4. Ignore results from stale requests

## Files

- `src/useProjectStatus.js` - The broken React hook
- `src/useProjectStatus.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

## Running Tests

```bash
npm run scenario:async
```
