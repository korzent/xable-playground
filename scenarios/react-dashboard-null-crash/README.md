# React Dashboard Null Crash

**Status: ❌ Broken by design**

Run:
```bash
npm test
```

You should see failing tests. Your goal is to fix the issue safely.

## Problem

The Dashboard component crashes when `github` data is `null` or when the `repositories` field is missing. This happens because the component assumes `github.repositories` always exists without checking for null or undefined values.

## Why It Matters

In production, API responses can be incomplete, delayed, or return null values. A component that crashes on missing data provides a poor user experience and can cause the entire application to fail.

## Expected Safe Fix

A safe fix should:
1. Check if `github` is null or undefined before accessing its properties
2. Check if `github.repositories` exists before iterating over it
3. Render a clear empty state message when data is missing
4. Preserve the existing functionality when data is present

## Files

- `src/Dashboard.jsx` - The broken React component
- `src/Dashboard.test.js` - Test demonstrating the crash
- `xable-scenario.json` - Scenario metadata

## Running Tests

```bash
npm run scenario:react
```
