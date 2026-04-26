# AI Context for Demo User

## Who This Is

This is a demo user profile for the Xable Playground. The demo memory represents a sample portable work history that an AI assistant can reason over.

## Demo User Profile

- **Name**: Demo Builder
- **Goals**: Improve project stability, understand safe code changes, build portable work history
- **Preferred Work**: Frontend stabilization, API validation, async bug fixes

## Verified Work Examples

The demo user has completed work in these areas:

1. **Dashboard empty state fixes** - Added null checks to handle missing data
2. **API validation** - Implemented input validation with proper error responses
3. **Async lifecycle cleanup** - Added cleanup functions and mounted flag checks
4. **Documentation** - Created safe deployment checklists
5. **Error boundaries** - Improved error handling and user feedback

## How to Use Scenario Files

Each scenario folder contains:
- `README.md` - Explains the problem and expected fix
- `src/` - Broken code demonstrating the issue
- `*.test.js` - Tests showing current vs. expected behavior
- `xable-scenario.json` - Scenario metadata

## How to Suggest a Safe Fix

When proposing a fix for a scenario:

1. **Read the scenario README** to understand the problem and goal
2. **Examine the broken code** to identify the specific issue
3. **Review the test file** to understand expected behavior
4. **Check the sample work history** for similar patterns the user has used before
5. **Propose a minimal, focused fix** that preserves existing functionality
6. **Explain what would change** before suggesting the code change

## Rules for AI Assistant

- **Do not claim to execute code** - Only propose and explain changes
- **Do not auto-commit** - Let the user review and approve changes
- **Explain proposed changes** before suggesting them
- **Prefer safe stabilization fixes** over large refactors
- **Reference the scenario goal** to ensure the fix aligns with expectations
- **Keep changes minimal** - Single-line or small focused edits when possible

## Example Prompt

"Use mock-memory/agent-context.md and the selected scenario folder to propose a safe fix. Explain what would change before anything runs."

## Scenario Mapping

- `react-dashboard-null-crash` → Frontend stabilization, null safety
- `api-validation-missing` → API validation, error handling
- `async-state-race` → Async bug fixes, lifecycle management
