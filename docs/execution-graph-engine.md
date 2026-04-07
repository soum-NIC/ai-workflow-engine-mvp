# Understanding the Workflow Plan Engine

The "Plan" is the heart of PlanPilot. It moves away from linear, top-to-bottom lists toward a logic-driven dependency network with **Hierarchical Support**.

## 1. Node States (The Lifecycle)

Every node (work item) exists in one of four specific states. The engine recomputes these states deterministically based on the graph:

- **⚪ BLOCKED (Waiting on Dependencies)**: The node cannot start because its "Prerequisite" node or its "Parent" node is incomplete.
- **🟢 READY (Ready to Start)**: All dependencies are `DONE`. This node is actionable.
- **🔵 RUNNING (In Progress)**: The node is currently active (AI Agent or Human User).
- **✅ DONE (Completed)**: The node is finalized. This state triggers a "signal" through the graph to unblock children or dependents.

## 2. Hierarchical Structure

PlanPilot supports a nested dependency model to manage complex workflows:

### Task vs. Sub-task (`level`)
- **Level 0 (Task)**: Main technical or strategic milestones.
- **Level 1 (Sub-task)**: Granular steps within a parent task. Linked via `parent_task_id`.

### Execution Rules
1. **Parent-Child Completion**: A Parent task (`level: 0`) is automatically marked as `DONE` only when *all* its child sub-tasks are `DONE`.
2. **Cascading Blocks**: If a Parent is `BLOCKED` by a dependency, all its sub-tasks are also `BLOCKED`.
3. **Local Scope**: Sub-tasks initially depend on each other within the same parent, but can have cross-parent dependencies if validated.

## 3. Dependency vs. Visual Order

### Logical Dependency (`depends_on`)
- **Graph Integrity**: The **Validation Engine** prevents circular dependencies or self-references during runtime surgery.
- **Topological Sorting**: The engine calculates the optimal execution order using a topological sort, ensuring prerequisites are handled before dependents.

### Visual Perspectives (The 3-Mode UI)
The Workflow Board provides three distinct ways to interact with the plan:
- **Board (Kanban)**: Optimized for execution and tracking of "Ready" and "In Progress" work.
- **Map (Roadmap)**: A vertical drill-down view showing hierarchical connections (Parent -> Children).
- **Graph (Canvas)**: An interactive visual editor for connecting nodes and managing complex dependency chains.

## 4. The Signal Chain (Autonomous Orchestration)

When a work item moves to `DONE`:
1. The **Validation Engine** verifies the change is legal.
2. The **Execution Engine** re-scans the global graph.
3. Any `BLOCKED` nodes that now have satisfied dependencies are promoted to `READY`.
4. If a newly `READY` node is an `AI` type, the engine **Auto-Triggers** its capability (e.g., Code Generation, Research).
5. If the node was the last remaining sub-task, its **Parent** is updated to `DONE`.

---
*Next: Read [Automation & Orchestration](./automation-and-orchestration.md) to see how the system executes on its own.*
