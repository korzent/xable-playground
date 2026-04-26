# Xable Playground

A collection of realistic broken code scenarios for Xable Personal Mode demos.

This playground teaches you when to block (Korros) and when to act (Kairos).

**Fork this repo. Pick a broken scenario. Let Xable inspect it, simulate a safe fix, and explain what would change before anything runs.**

## What This Is

This repo contains small, self-contained code scenarios with realistic bugs. Each scenario:
- Has clear documentation explaining the problem
- Includes broken code that demonstrates a real issue
- Provides test cases showing current vs. expected behavior
- Is completely standalone with no external dependencies

## How to Run

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run a specific beginner scenario
npm run scenario:react
npm run scenario:api
npm run scenario:async

# Run an advanced scenario
npm run scenario:full-stack
npm run scenario:workflow

# Run the expert challenge
npm run scenario:korros-governed-agent
```

## Korros & Kairos

This system operates between two states:

**Korros** — the system must not act  
**Kairos** — the system can safely act  

---

Most problems are not solved by acting immediately.

They are solved by first reaching Korros:
- identifying missing context
- preventing unsafe behavior
- understanding the system state

Only then can the system reach Kairos.

The goal is not just to fix code.

The goal is to know when action is safe.

## How to Use with Xable

1. Fork this repo
2. Open a scenario directory (e.g., `scenarios/react-dashboard-null-crash/`)
3. Read the scenario README to understand the problem
4. Let Xable inspect the broken code
5. Ask Xable to simulate a safe fix
6. Review the proposed changes before anything runs

## What You'll Experience

1. **Start with a broken system** - Each scenario has failing tests that demonstrate the bug
2. **Let Xable propose a safe fix** - AI analyzes the code and suggests minimal, focused changes
3. **See what would change** - Review the diff before anything runs
4. **Apply the fix and verify** - Apply the changes and watch tests pass

This flow demonstrates the core value: understanding what will change before committing to it.

## Use the Mock Memory Bundle

The `mock-memory/` folder contains a portable, file-based memory system that lets an AI assistant reason over a simulated user's work history.

**To use the mock memory:**

1. Pick a scenario (e.g., `scenarios/react-dashboard-null-crash/`)
2. Open `mock-memory/agent-context.md` to understand the demo user's context
3. Ask an AI assistant to reason over both the scenario and the memory
4. Compare the proposed fix to the scenario goal and the user's past work

**Example prompt:**
> Use `mock-memory/agent-context.md` and the selected scenario folder to propose a safe fix. Explain what would change before anything runs.

The mock memory includes:
- User profile with goals and preferences
- Past work history with skills and scenario mappings
- Contribution artifacts (mock/demo only)
- Agent context instructions for AI assistants

**Note:** The mock memory is for demo purposes only. It contains synthetic data and does not connect to any real authentication or storage systems.

## Scenarios

| Scenario | Difficulty | Category |
|----------|------------|----------|
| React Dashboard Null Crash | Beginner | Frontend |
| API Validation Missing | Intermediate | API |
| Async State Race | Intermediate | Async |
| Full-Stack Stabilization | Advanced | Multi-System |
| Governed Workflow Simulation | Advanced | Governed-Workflow |
| Korros Governed Agent Challenge (Expert) | Expert / Frontier | Multi-System |

See [SCENARIOS.md](SCENARIOS.md) for detailed descriptions.

## Advanced: Reason Across Systems

These scenarios show Xable reasoning across connected parts of a system, not just single-file code fixes. They are designed to demonstrate safe proposals, state previews, and blocked actions when context is missing.

## Expert / Frontier: Korros Governed Agent Challenge

The hardest challenge in the repo, requiring multi-step reasoning across memory, intent, contribution, simulation, and safety gating. The goal is to move the system from Korros (must not act) to Kairos (can safely act). The safest answer may be to block and ask for the next missing input.

## Safety Promise

- Nothing auto-runs or auto-commits
- No secrets, tokens, or private URLs
- No external services required
- Public-safe language and content
- No dependency on main Xable repo

## Fork Instructions

1. Click "Fork" on GitHub
2. Clone your fork locally
3. Run `npm install`
4. Pick a scenario and start exploring
