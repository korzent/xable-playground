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
| korros-governed-agent-challenge | Korros Governed Agent Challenge (Expert) | Expert / Frontier | Multi-System | Agent incorrectly produces SAFE_TO_RUN despite stale memory, broad intent, missing attribution, and incomplete project state | Implement five-step reasoning to return BLOCKED_WITH_NEXT_STEP when context is insufficient | `npm run scenario:korros-governed-agent` |

## Beginner Scenarios

Simple local fixes that demonstrate basic code stabilization.

## Levels

- Beginner — Fix a single issue
- Advanced — Reason across multiple systems
- Korros (Expert) — The system must block unsafe execution

A Korros scenario requires:
- refusing unsafe execution
- identifying missing context
- explaining why the action is blocked
- proposing the next safe step

The correct answer is often:

BLOCKED

## Advanced Scenarios

Multi-system reasoning scenarios that demonstrate Xable reasoning across connected parts of a system, not just single-file code fixes. They are designed to demonstrate safe proposals, state previews, and blocked actions when context is missing.

## Expert / Frontier Scenarios

The hardest challenges in the repo, requiring multi-step reasoning across memory, intent, contribution, simulation, and safety gating. The goal is to move the system from Korros (must not act) to Kairos (can safely act). The safest answer may be to block and ask for the next missing input.

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

---

### Korros Governed Agent Challenge (Expert)

**Path:** `scenarios/korros-governed-agent-challenge/`

**Problem:** A user asks an agent to "improve my project and prepare the next safe move" with partial memory, conflicting intent, and incomplete project state. The broken implementation incorrectly produces SAFE_TO_RUN even though memory is stale, intent is too broad, contribution lacks attribution, simulation ignores missing project state, and workflow skips required BLOCKED decision. The system is stuck in Korros (must not act) but doesn't know it.

**Goal:** Move the system from Korros (must not act) to Kairos (can safely act) by implementing five-step reasoning: check memory freshness, validate intent scope, ensure contribution attribution, simulate with project state verification, and generate safe next-move when blocking. The safest answer is to return BLOCKED_WITH_NEXT_STEP when context is insufficient, explaining what's missing and how to reach Kairos.

**Expected Fix Theme:** Implement five-step reasoning to determine if the system is in Korros or Kairos. If in Korros, return BLOCKED_WITH_NEXT_STEP with explanation, missingInputs, and recommendedNextAction. Only when all checks pass can the system reach Kairos (SAFE_TO_RUN). Do not force Kairos when context is insufficient.

**Files:**
- `memory/userMemory.js` - User memory model
- `memory/memoryResolver.js` - Memory freshness and sufficiency resolver
- `intent/intentRequest.js` - Intent request model
- `intent/intentValidator.js` - Intent scope validator
- `contribution/contributionBuilder.js` - Contribution builder with attribution
- `simulation/safetySimulator.js` - Safety simulation with project state checks
- `workflow/governedAgentFlow.js` - Orchestration of all reasoning steps
- `xable-scenario.json` - Scenario metadata

**Systems Involved:** Personal Memory, Intent Resolution, Contribution Attribution, Project State Simulation, Governed Workflow

**Xable Concepts:** Korros state (restraint), Kairos state (action), Bounded agent, context-aware simulation, explainable blocking, safe next-move generation, multi-step reasoning
