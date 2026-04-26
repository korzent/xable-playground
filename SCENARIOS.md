# Scenarios

This document describes all available scenarios in the playground.

## Scenario Overview

| ID | Title | Difficulty | Category | Problem | Goal | Command |
|----|-------|------------|----------|---------|------|---------|
| react-dashboard-null-crash | React Dashboard Null Crash | Beginner | Frontend | Dashboard crashes when GitHub data is null or repositories is missing | Render a clear empty state instead of crashing | `npm run scenario:react` |
| api-validation-missing | API Validation Missing | Intermediate | API | API handler accepts malformed request bodies and proceeds with unsafe assumptions | Return clear 400 errors before execution | `npm run scenario:api` |
| async-state-race | Async State Race | Intermediate | Async | Async result updates state after component unmount or stale request | Ignore stale results and clean up safely | `npm run scenario:async` |
| full-stack-stabilization | Full-Stack Stabilization | Advanced | Multi-System | Frontend, API, and shared state disagree about project status, creating misleading "safe to run" messaging | Stabilize the system with consistent validation, fallback states, and impossible state rejection | `npm run scenario:full-stack` |
| governed-workflow-simulation | Governed Workflow Simulation | Advanced | Governed-Workflow | Agent proposes actions without checking context, simulation returns SAFE when context is missing | Make workflow safe: check memory before suggesting, cite work examples, block when context insufficient | `npm run scenario:workflow` |

## Beginner Scenarios

Simple local fixes that demonstrate basic code stabilization.

## Advanced Scenarios

Multi-system reasoning scenarios that demonstrate Xable reasoning across connected parts of a system, not just single-file code fixes. They are designed to demonstrate safe proposals, state previews, and blocked actions when context is missing.

## Scenario Details

### React Dashboard Null Crash

**Path:** `scenarios/react-dashboard-null-crash/`

**Problem:** Dashboard crashes when GitHub data is null or repositories is missing.

**Goal:** Render a clear empty state instead of crashing.

**Expected Fix Theme:** Add null checks and defensive rendering to handle missing data gracefully.

**Files:**
- `src/Dashboard.jsx` - Broken React component
- `src/Dashboard.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

---

### API Validation Missing

**Path:** `scenarios/api-validation-missing/`

**Problem:** API handler accepts malformed request bodies and proceeds with unsafe assumptions.

**Goal:** Return clear 400 errors before execution.

**Expected Fix Theme:** Add input validation to check required fields before processing.

**Files:**
- `src/handler.js` - Broken API handler
- `src/handler.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

---

### Async State Race

**Path:** `scenarios/async-state-race/`

**Problem:** Async result updates state after component unmount or stale request.

**Goal:** Ignore stale results and clean up safely.

**Expected Fix Theme:** Add cleanup functions and cancellation guards to prevent stale updates.

**Files:**
- `src/useProjectStatus.js` - Broken React hook
- `src/useProjectStatus.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

---

### Full-Stack Stabilization

**Path:** `scenarios/full-stack-stabilization/`

**Problem:** A dashboard, API handler, and shared state model disagree about project status. Frontend assumes API always returns complete repo status, API accepts malformed repo status requests, and shared state allows impossible states like `connected: false + status: "ready"` or `hasMemory: false + agentSuggestion: "deploy"`. Combined behavior creates misleading "safe to run" messaging.

**Goal:** Stabilize the system so invalid API input returns clear 400 errors, frontend renders safe fallback states, shared project state rejects impossible combinations, and agent suggestion is only shown when prerequisites are met.

**Expected Fix Theme:** Add validation across all layers, implement safe fallbacks, and enforce state consistency rules.

**Files:**
- `frontend/Dashboard.js` - Broken dashboard component
- `frontend/Dashboard.test.js` - Test demonstrating the issue
- `api/projectStatusHandler.js` - Broken API handler
- `api/projectStatusHandler.test.js` - Test demonstrating the issue
- `shared/projectState.js` - Broken shared state model
- `shared/projectState.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

**Systems Involved:** Frontend, API, Shared State

**Xable Concepts:** Safe simulation, state consistency, fallback behavior

---

### Governed Workflow Simulation

**Path:** `scenarios/governed-workflow-simulation/`

**Problem:** A mock personal agent proposes an action without checking enough context. Agent suggests a change even when memory is empty, suggestion does not cite source work examples, simulation says SAFE even when required context is missing, contribution record is created without a clear reason, and user cannot tell what changed or why.

**Goal:** Make the governed workflow safe and understandable: agent must check memory before suggesting, suggestion must cite sample work history when available, simulation must return BLOCKED when context is insufficient, contribution must include a human-readable reason, and output must explain proposed change, simulated state, and next move.

**Expected Fix Theme:** Add bounded agent checks, require work history citations, implement context-aware simulation, and ensure explainable proposals.

**Files:**
- `workflow/intent.js` - Intent handling
- `workflow/suggestion.js` - Suggestion generation
- `workflow/contribution.js` - Contribution record
- `workflow/simulation.js` - Simulation logic
- `workflow/workflow.test.js` - Test demonstrating the issue
- `memory/sampleMemory.js` - Sample memory for demo
- `memory/memory.test.js` - Test demonstrating the issue
- `xable-scenario.json` - Scenario metadata

**Systems Involved:** Personal Memory, Agent Suggestion, Contribution Record, Simulation

**Xable Concepts:** Bounded agent, portable memory, explainable proposal, blocked when unsafe
