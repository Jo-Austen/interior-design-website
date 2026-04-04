# AGENTS.md

## Project
Premium interior design website built with Next.js App Router, TypeScript, and Tailwind CSS v4.

---

## Core Rules
- Use TypeScript throughout
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling (no custom CSS in components)
- Keep components modular and reusable
- Use semantic HTML and accessible patterns
- Ensure no TypeScript or hydration errors

---

## UI Guidance
- Prefer clean, minimal, premium layouts with strong spacing and typography hierarchy
- Make layout decisions based on content, parent container, and responsive behavior
- Use `w-full` by default and let parent containers define width
- Avoid redundant nested width constraints
- Add multi-column layouts only when content supports it
- Choose breakpoints based on actual content pressure, not fixed templates

---

## Refactoring Rules
- When refactoring styles, do not change business logic
- Inspect parent-child layout before modifying width utilities
- Improve spacing, hierarchy, and readability before adding wrappers
- Prefer adjusting existing classes over restructuring components

---

## Anti-Patterns
- Do not stack multiple `max-w-*` constraints across nested containers
- Do not use `mx-auto + max-w-*` as a default everywhere
- Do not force `grid-cols-1 lg:grid-cols-2` without checking content
- Do not apply identical narrow widths to both columns in a two-column layout
- Do not encode page-specific fixes as global rules

---

## Known Pitfalls
- Tailwind `container` can be too restrictive — prefer explicit parent width control
- Layout compression is often caused by nested max-width constraints
- Always check effective width across parent and child elements before adjusting layout