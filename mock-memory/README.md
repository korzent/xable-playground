# Demo Memory Bundle

This folder contains a **simplified demo context** for AI assistants to reason over a simulated user's work history.

**Disclaimer:** This mock memory is a simplified demo context. It is not Xable's production memory format and does not expose internal governance structures.

## What This Is

A local, file-based representation of a sample portable work history that includes:
- Sample user profile with goals and preferences
- Sample work history with verified work examples
- AI context instructions for assistants

## What This Is Not

- **Not real authentication** - This is a demo-only system
- **Not real storage** - Files are local to this repo
- **Not production memory** - Simplified format for demonstration
- **Not private user data** - All data is synthetic

## Files

- `sample-profile.json` - Demo user profile, goals, and preferences
- `sample-work-history.json` - Sample portable work history with verified work examples
- `agent-context.md` - Instructions for AI assistants on how to reason over the memory

## How to Use

When working with a scenario:

1. Open the scenario folder (e.g., `scenarios/react-dashboard-null-crash/`)
2. Read the scenario README to understand the problem
3. Open `mock-memory/agent-context.md` to understand the demo user's context
4. Ask an AI assistant to reason over both the scenario and the memory
5. Review the proposed safe fix before applying changes

## Example Prompt

> Use `mock-memory/agent-context.md` and the selected scenario folder to propose a safe fix. Explain what would change before anything runs.

## Why This Exists

This demo memory demonstrates how a portable, user-owned work history could help an AI assistant:
- Understand the user's goals and preferences
- Reference similar past work
- Suggest fixes aligned with the user's style
- Maintain context across sessions without backend dependencies

## Safety

All data in this folder is synthetic and demo-only. No real personal information, credentials, or private data exists.
