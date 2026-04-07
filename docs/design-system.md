# PlanPilot MVP Design System & Nomenclature

## 1. UI Behavior Guidelines

This section defines how architectural system logic correctly presents itself visually to the user.

- **Status Display:** Each Work Item prominently displays its status using UI Chips / Badges. The labels MUST be descriptive, user-friendly equivalents of their underlying system enumerations (e.g. READY becomes `Ready to Start`). The chips use color variants corresponding to severity:
  - `Ready to Start`: Green / Primary
  - `Waiting on Dependencies`: Warning / Amber
  - `In Progress`: Primary Blue
  - `Completed`: Success Emerald
- **Dependency Visibility:** The MVP relies strictly on dependency networks (the Workflow Plan). If a Work Item is currently `BLOCKED`, the visual application MUST not only state that it is blocked but explain exactly what is causing the block via the format: `"Waiting on Dependencies (depends on <Work Item Name>)"`. This is strictly visible inside Kanban cards, Workflow Map badges, and Execution headers.
- **Execution Flow:** The UI visually sorts and clusters progressing work linearly. At all times, the system clearly depicts completed items, currently executing items, and the immediate block sequence preventing execution.

## 2. Component Usage by Module

Strictly adhere to these designated display components for each major user-flow intersection to maintain standardization:

- **Goal Input Module:**
  - Standard Forms with text inputs and resizing textareas.
  - Required Fields: `Project Goal`, `Timeline`, `Constraints`.
- **Workflow Plan Module:**
  - Stacked Cards mapped efficiently to a lateral Kanban or vertical topological map.
  - Heavy reliance on colored Status Chips specifying exactly what action follows internally.
- **Execution Panel Module:**
  - High-fidelity content Cards isolating human or AI input.
  - Dominant Action Buttons to sequence the Work Item progression (`Start Work Item`).
- **Dashboard Module:**
  - Metric Cards aggregating global progress.
  - Linear Progress Bar tracking the explicit ratio of total nodes relative to `Completed` nodes.

## 3. Status Mapping

| Backend Token | Frontend App UI Value | Component Styling |
| :--- | :--- | :--- |
| `READY` | Ready to Start | `variant='default'` |
| `BLOCKED` | Waiting on Dependencies | Custom Tailwind `.bg-amber-500` Warning |
| `RUNNING` | In Progress | `variant='default'` or Custom primary |
| `DONE` | Completed | `variant='success'` |

## 4. Design Tokens & Layout System

The application employs pure Tailwind CSS mapped uniquely to CSS custom properties.

- **Colors:** Clean, minimal SaaS aesthetic. Soft neutral backgrounds (`bg-background`) contrasted by crisp structural cards bounding a soft 1px border.
- **Typography:** Custom tracking formats utilizing global `font-sans` logic (Inter or system equivalent) and tight leading. Primary headers map visually via hierarchy (H1-H4) while `uppercase tracking-widest text-[10px]` is strictly used for supplementary metadata boundaries.
- **Surfaces & Layout:** Card-based layouts with `8px–12px` border radiuses across all components. Base grid spacing relies strictly on an 8px unit scale.
- **Spacing:** Maintains strict `gap-2` to `gap-6` alignments native to container bounding structures and Flexbox rows. Section spacing follows a stable 24px-32px interval prioritizing maximum whitespace readability.

## 5. Motion & Animation System (CRITICAL)

The UI must enforce fluid, responsive, and motion-driven interaction patterns universally mimicking premium collaboration structures.

- **Global Baseline:** 
  - Durations default to 150ms–250ms executing cleanly across `ease-in-out` transitions.
  - No abrupt changes: Component states (hover, focus, active, disabled) must visually pulse, brighten, or scale smoothly without tearing.
- **Page Transitions:** View entries cascade downwards gracefully via `translateY(12px) → 0` linked identically to `opacity: 0 → 1` (Mapped to Tailwind: `animate-in fade-in slide-in-from-bottom-[12px] duration-300`).
- **Surface Hover Behavior:** Floating elevation triggers on hover via `scale(1.01)` appending shadow amplification gradients natively without jittering. 
- **Action Elements (Buttons/Inputs):**
  - Buttons forcefully drop dynamically on active trigger mappings (`active:scale-[0.98]`).
  - Inputs generate solid `ring` layouts mapped to the primary accent color on focus thresholds without altering visual padding matrices.
- **Progressive Disclosure:** Secondary actions are exclusively hidden inside micro-interactions, conditionally revealing on group hover states to protect minimal layouts.

## 6. Architecture Extensibility Validation

- **No component logic without an established CSS animation feedback state.**
- **No direct styling injection outside of central Configured tokens.**
- **Ensure the interface natively generates visual feedback on all atomic states.**

---
*Next: Read [AI Agent Rules](./ai-agent-rules.md) for strict architectural compliance.*
