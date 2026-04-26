# Fix real broken systems with AI — before anything runs

Turn bugs into safe, explainable changes.  
See what would happen before you apply a fix.

This playground teaches you when to block (Korros) and when to act (Kairos).

**Fork this repo. Pick a broken scenario. Let Xable inspect it, simulate a safe fix, and explain what would change before anything runs.**

## What this is

This is a playground of **intentionally broken systems**.

Instead of blindly fixing code, the goal is different:

- propose a change  
- simulate the outcome  
- understand the impact  
- decide what to do  

You don’t just fix bugs.  
You see what would happen first.

---

## Try it in 60 seconds

```bash
npm install
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

You’ll see failing tests.

That’s intentional.

---

## Your goal

Fix the system safely.

Before changing anything, ask:

- What will this change do?  
- What state will it create?  
- Is it actually safe?  

---

## Scenarios

| Scenario | Difficulty | Category |
|----------|------------|----------|
| React Dashboard Null Crash | Beginner | Frontend |
| API Validation Missing | Intermediate | API |
| Async State Race | Intermediate | Async |
| Full-Stack Stabilization | Advanced | Multi-System |
| Governed Workflow Simulation | Advanced | Governed-Workflow |
| Korros Governed Agent Challenge (Expert) | Expert / Frontier | Multi-System |

- React dashboard crash (null data)  
- API validation missing  
- Async state race condition  

### Advanced

- Full-stack stabilization (frontend + API + state)  
- Governed workflow simulation (memory + agent + reasoning)  

## Expert / Frontier: Korros Governed Agent Challenge

The hardest challenge in the repo, requiring multi-step reasoning across memory, intent, contribution, simulation, and safety gating. The goal is to move the system from Korros (must not act) to Kairos (can safely act). The safest answer may be to block and ask for the next missing input.

## Why this is different

Most tools generate code.

This is about something else:

- understanding changes before they happen  
- preventing unsafe actions  
- making system behavior visible  

Sometimes the correct result is:

BLOCKED

That’s part of the system.

---

## How to use with AI

Pick a scenario.

Then ask an AI assistant:

Propose a safe fix for this scenario.  
Explain what would change before anything runs.  
Describe the new system state after the fix.

Compare the answer to the expected outcome.

---

## Demo memory (simplified)

This repo includes a **demo memory bundle**.

It represents:
- past work  
- patterns  
- preferences  

An AI can use it to:
- suggest better fixes  
- explain decisions  
- connect problems to experience  

This is a simplified demo.  
It does not expose production systems.

---

## Human + AI collaboration

This is not about replacing developers.

It’s about changing the workflow:

- AI proposes  
- system simulates  
- human decides  

Safer systems come from understanding, not automation.

---

## Try it on your own code

1. Fork this repo  
2. Fix a scenario  
3. Apply the same thinking to your own project  

Ask:

What would happen if I made this change?

---

## Advanced scenarios

Some scenarios require reasoning across:

- frontend + API + state  
- memory + suggestions + outcomes  

These are closer to real-world systems.

---

## Safety mindset

Before any change:

- simulate the outcome  
- understand the impact  
- decide what to do  

The safest system is one where nothing runs by accident.

---

## Built for the future of development

This repo is a small example of a larger idea:

Code is not just written.  
It is proposed, understood, and verified.

---

## Try the product

Use this with Xable:

https://xableai.web.app

Your AI workspace.  
Owned by you.
