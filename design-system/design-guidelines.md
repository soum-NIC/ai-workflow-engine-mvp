# MVP Design System Guidelines

This document serves as the absolute index for the MVP SaaS Design Architecture. Do NOT build UI components outside of these strictly defined tokens and guidelines.

## 1. Core Principles

- **Active Hierarchy Aesthetics**: Every component must reflect its level (0 = Task, 1 = Sub-task) via consistent padding, borders, and typography.
- **Workflow State Integrity**: Every component MUST map to true execution engine states (Ready to Start, Waiting on Dependencies, In Progress, Completed).
- **3-Mode UI Coherence**: The design must remain usable across Board, Map, and Graph perspectives. Standardize the "Card" and "Badge" patterns throughout.

## 2. Token References

- **[Design Tokens](./tokens/index.md)**: Color scales, semantic typography, and spacing models.
- **[UI Components](./components/index.md)**: Standardized atomic components (Buttons, Modals, Inputs).
- **[UX Patterns](./patterns/index.md)**: Required layout formations, empty states, and blocking interaction flows.

## 3. Perspective-Specific Guidelines

### Board (Execution)
- Focus on draggable cards and clear status columns.
- Use distinct indicator colors for `RUNNING` (Blue pulse) and `DONE` (Emerald).

### Map (Hierarchy)
- Emphasize vertical connections and indentation for sub-tasks.
- Use dashed lines to show parent-child nesting.

### Graph (Dependencies)
- Use node-based UI with standard "Handles" for dependency linking.
- Connectors should rely on semantic colors: Blue (Ready), Amber (Blocked), Grey (Inactive).

## 4. Mandatory Interaction Timing

All hover transitions and micro-interactions use `150ms-250ms cubic-bezier` easing curves (`time-200 ease-in-out` in Tailwind). Instant state swaps are forbidden unless handling high volumes of data sorting.

Read [AI Agent Rules](../docs/ai-agent-rules.md) to map dependencies across these components.
