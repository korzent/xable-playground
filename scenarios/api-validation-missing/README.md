# API Validation Missing

**Status: ❌ Broken by design**

Run:
```bash
npm test
```

You should see failing tests. Your goal is to fix the issue safely.

## Problem

The API handler accepts malformed request bodies and proceeds with unsafe assumptions. It assumes `request.body.intent` and `request.body.action` always exist without validation, which can lead to unexpected behavior or errors.

## Why It Matters

API endpoints should validate input before processing. Without validation, malformed requests can cause:
- Runtime errors when accessing undefined properties
- Incorrect business logic execution
- Security vulnerabilities from unexpected input
- Poor error messages for clients

## Expected Safe Fix

A safe fix should:
1. Validate that required fields exist in the request body
2. Return clear 400 Bad Request responses when validation fails
3. Provide helpful error messages indicating which fields are missing
4. Only proceed with business logic after validation passes

## Files

- `src/handler.js` - The broken API handler
- `src/handler.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

## Running Tests

```bash
npm run scenario:api
```
