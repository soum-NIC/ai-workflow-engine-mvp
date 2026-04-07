# PlanPilot: The Autonomous Workflow Plan Concept

Welcome to **PlanPilot**, a next-generation orchestration platform designed to shift project management from "tracking" to "executing."

## The Core Philosophy

Traditional project management tools are **Passive Lists**. They wait for you to update them. If a work item is finished, you have to click a button, and then you have to manually check what's next.

**PlanPilot** is an **Active Hierarchical Engine**. It treats your project as a living machine (a Workflow Plan) where:
- **Work Items have context**: Every work item knows what it needs before it can start.
- **AI is an Operative**: The AI doesn't just suggest things; it actually *executes* technical work items for you.
- **Flow is Automatic**: The system is designed to "trigger" itself. When a prerequisite or a child sub-task is met, the change ripples through the plan automatically.
- **Multi-Perspective UI**: Switch between Kanban (Execution), Map (Hierarchy), and Graph (Network) views seamlessly.

## Key Terminology

| Term | Traditional Equivalent | PlanPilot Definition |
| :--- | :--- | :--- |
| **Workflow Plan** | Project / Workflow | A hierarchical network of interconnected work item nodes. |
| **Node** | Work Item / Step | A task (`level: 0`) or sub-task (`level: 1`) within the plan. |
| **Parent Task** | Container / Epic | A high-level node that tracks the completion of its children. |
| **Prerequisite** | Dependency | A specific node that *must* reach the `DONE` state before the current node can be initialized. |
| **Autonomous Trigger** | Manual Start | The event-driven system that automatically fires AI logic when a node becomes `READY`. |
| **Runtime Surgery** | Manual Edits | The ability of users to override AI-generated plans using LocalStorage-based overrides without database migrations. |

## Vision: The "Offline Productivity" Loop

The ultimate goal of PlanPilot is to allow you to **Initialize a Workflow Plan** and walk away. While you are offline:
1. One AI work item finishes.
2. It unblocks the next work item or sub-task.
3. If that work item is also AI-driven, PlanPilot triggers it instantly.
4. The project progresses autonomously through technical milestones until it hits a "Human Intervention" node.

---
*Next: Read [Understanding Workflow Plans](./execution-graph-engine.md) to learn how hierarchical dependencies work.*
