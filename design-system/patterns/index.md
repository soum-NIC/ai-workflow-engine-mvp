# UX Layout Patterns

Standard UX formulas deployed across dynamic execution environments.

## 1. Empty States
Every container or table missing workflow logic must fall back to an aesthetic 'Empty State' module displaying guidance (e.g., "No Work Items initialized. Start a new Workflow Plan.").

## 2. Work Item Display Behavior
When showing a Work Item anywhere in the UI:
- Format: `[Name] -> [Status Badge] -> [If Blocked: Dependency Reason]`
- Explicit dependency tracking: **"Waiting on Dependencies (depends on `<Dependency Name>`)"**. This exact string must be visible directly within the card scope to preserve strict AI transparency.

## 3. The Execution Sequence Array
Visual topological or Kanban views MUST adhere to their `graph_order` parameter but cannot violate structural constraints from `depends_on`. The UI strictly respects logic > UI order.
