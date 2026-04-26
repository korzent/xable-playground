# Governed Workflow Simulation

**Status: ❌ Broken by design**

Run:
```bash
npm run scenario:workflow
```

You should see failing tests. Your goal is to fix the issue safely.

## Problem

A mock personal agent proposes an action without checking enough context. The system has multiple issues:

- **Agent suggests changes even when memory is empty** - No check for required context
- **Suggestion does not cite source work examples** - User cannot see why this suggestion was made
- **Simulation says SAFE even when context is missing** - Unsafe actions are allowed to proceed
- **Contribution record is created without a clear reason** - No explanation of what changed or why
- **Output does not explain proposed change, simulated state, or next move** - User cannot understand the proposal

This demonstrates that Xable is not just a code fixer - it must reason across memory, agent suggestions, contribution records, and simulated outcomes to ensure safety.

## Why It Matters

In a real governed workflow, the agent should:
- Check memory before suggesting actions
- Cite relevant work examples to build trust
- Block unsafe actions when context is insufficient
- Explain what would change and why
- Provide clear next steps for human review

## Expected Safe Fix

A safe fix should:
1. **Agent must check memory before suggesting** - Return NO_SUGGESTION when memory is empty
2. **Suggestion must cite sample work history** - Include work IDs when available
3. **Simulation must return BLOCKED when context is insufficient** - Don't say SAFE without proper checks
4. **Contribution must include a human-readable reason** - Explain what changed and why
5. **Output must explain proposed change, simulated state, and next move** - Make the proposal understandable

This demonstrates Xable as more than a code fixer - it's a safe reasoning layer for coordinated human + AI work.

## Files

- `workflow/intent.js` - Intent handling
- `workflow/suggestion.js` - Suggestion generation
- `workflow/contribution.js` - Contribution record
- `workflow/simulation.js` - Simulation logic
- `workflow/workflow.test.js` - Test demonstrating the issue
- `memory/sampleMemory.js` - Sample memory for demo
- `memory/memory.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

## Systems Involved

- Personal Memory
- Agent Suggestion
- Contribution Record
- Simulation

## Xable Concepts

- Bounded agent
- Portable memory
- Explainable proposal
- Blocked when unsafe
