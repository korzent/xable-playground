# Advanced Challenge — fix a system, not just code

These scenarios require reasoning across multiple parts.

---

## Try one:

- Full-stack stabilization
- Governed workflow simulation

**Expert Challenge:**
- Korros Governed Agent Challenge (hardest in the repo) - Move the system from Korros (must not act) to Kairos (can safely act)

---

## Your task

Fix the system so that:

- state is consistent
- invalid actions are blocked
- unsafe behavior is prevented
- outputs are explainable

---

## You should consider:

- frontend behavior
- API validation
- shared state consistency
- when something should be BLOCKED

---

## Important

The correct answer is not always "make it work."

Sometimes the correct answer is:

BLOCKED

---

## Bonus

Use the mock memory + agent context.

Ask:

- Should this action even be allowed?
- What information is missing?
- What would a safe system do?

---

## Submit your PR

Include:

- your fix
- your reasoning
- what changed at the system level
