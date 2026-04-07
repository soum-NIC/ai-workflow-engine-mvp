# 🤖 AI Agent Execution & Architecture Rules

**CRITICAL INSTRUCTION:** Any AI Agent, coding assistant, or developer parsing this repository MUST read and adhere to these structural and nomenclature rules before executing any code changes, bug fixes, or feature enhancements.

## 1. Core Architecture & Monorepo Structure

This project uses an NPM Workspaces monorepo architecture. Code is strictly segregated by domain.

- **`/apps/frontend`**: Next.js App Router UI. All components, pages, and UI logic live here.
- **`/apps/backend`**: API Routes and backend services.
- **`/engine`**: The core execution, simulation, and validation logic.
- **`/shared`**: Universal types, validation (`workflow-validation.ts`), and execution (`workflow-execution.ts`) logic. **This is the Source of Truth for the Graph.**

**Rule:** Do not break the module boundaries. The frontend consumes `/shared` and `/engine` via absolute paths. Do not duplicate graph logic in the UI; always import from `@shared/lib`.

## 2. Mandatory Nomenclature

You must strictly use the following terminology across all UI components, API responses, and database logs.

| Legacy System Term | Active Enforced Name | Scope / Use In |
| :--- | :--- | :--- |
| **Task** | `Work Item` | UI, API, Logs |
| **Workflow / DAG** | `Workflow Plan` | UI, Documentation |
| **Sub-task** | `Sub-task` (Level 1) | UI, Documentation |

### Status Enumerations (Deterministic)

The system uses `READY`, `BLOCKED`, `RUNNING`, and `DONE`.
Mapping for UI Rendering:

- `READY` ➔ **`Ready to Start`** (Variant: `primary` blue/green)
- `BLOCKED` ➔ **`Waiting on Dependencies`** (Variant: Warning/Amber)
- `RUNNING` ➔ **`In Progress`** (Variant: Blue/Pulse)
- `DONE` ➔ **`Completed`** (Variant: `success` / Emerald)

## 3. Hierarchical Dependency Enforcement

1. **Validation First:** All dependency changes (Connect/Disconnect/Add) MUST pass through `validateDependency` in `@shared/lib/workflow-validation`.
2. **Circular Prevention:** You cannot create a dependency that forms a loop.
3. **Hierarchy Rules:**
   - Level 0: Main Tasks.
   - Level 1: Sub-tasks (must have a `parent_task_id`).
   - If a Parent is `DONE`, all children MUST be `DONE`. The engine enforces this.
4. **Execution Sequence:** The system resolves visual sequence via `graph_order` and logical sequence via `depends_on`. You cannot re-order if it violates the `depends_on` constraint.

## 4. MVP & Design System First

- **Runtime Overrides:** The UI supports "Runtime Surgery" using LocalStorage for POC-level modifications. Do not modify the DB schema for hierarchical fields yet.
- **3-Mode UI Switcher:** Always maintain support for `Board`, `Map`, and `Graph` views in the Execution Engine.
- **No Placeholders:** If you need an image or icon, use the defined Design System tokens (`/design-system/design-guidelines.md`).

## 5. Pre-Flight Checklist for Agents

Before modifying code:
1. **Analyze the Graph:** Check `@shared/types/task.ts` for hierarchical fields.
2. **Review Validation Logic:** Check `@shared/lib/workflow-validation.ts` before allowing dependency edits.
3. **Verify Execution Flow:** Check `@shared/lib/workflow-execution.ts` to see how statuses are propagated.

Failure to follow these rules will compromise the stability and standardized UI of the autonomous engine.
