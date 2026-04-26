# First PR Challenge — make a safe fix

Want to contribute?

Start here.

---

## Pick one scenario

- scenarios/react-dashboard-null-crash
- scenarios/api-validation-missing
- scenarios/async-state-race

---

## Requirements

Your PR must:

- Fix the failing tests
- Not break existing behavior
- Include a short explanation:

    What changed
    Why it is safe
    What state it creates

---

## Example explanation

This change adds null checks to prevent crashes when GitHub data is missing.
Instead of throwing, it renders a fallback state.
This ensures the UI remains stable and predictable.

---

## Goal

We are not optimizing for clever code.

We are optimizing for:

- safe behavior
- predictable state
- clear reasoning

---

## Submit your PR

Fork → fix → PR

We'll review and highlight strong examples.
