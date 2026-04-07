# Automation and AI Orchestration

PlanPilot is not just a dashboard; it's a "Worker Force." It distinguishes between work that needs **Human Strategy** and work that can be **Machine Executed** using a **Hierarchical Dependency Graph**.

## 1. Executor Types

When the Workflow Plan is first initialized, the **Architecting Engine** classifies every node (Task or Sub-task):

### 🤖 AI (Autonomous)
- **Nature**: Technical, research-heavy, documentation, or code generation.
- **Behavior**: Designed to run automatically as soon as its status becomes `READY`.
- **Output**: Generates high-fidelity artifacts directly into the project state.

### 👤 HUMAN (Strategic)
- **Nature**: Decision points, creative approvals, or physical setup.
- **Behavior**: These nodes halt the autonomous chain. The engine waits for manual confirmation.

## 2. Hierarchical Orchestration Logic

The system uses a **Topological Execution Engine** to compute the next moves:

- **Sub-task Execution**: If a Task is split into Sub-tasks, the engine executes the Sub-tasks sequentially or in parallel based on internal dependencies.
- **Parent Completion**: Once the final Sub-task reaches `DONE`, the Parent Task is automatically updated to `DONE`, unblocking downstream dependencies.
- **Runtime Surgery**: The **Validation Engine** allows users to inject new nodes or re-parent existing ones. The engine instantly recomputes the **Topological Order** to ensure the new path is valid.

## 3. The "Next Strategic Move" Engine

This engine calculates the priority of all `READY` nodes:
- **Dependency Depth**: Which node will unblock the *most* downstream work items?
- **Hierarchy Priority**: Should we focus on finishing a half-done Parent task or starting a new high-priority Task?
- **Architect Reasoning**: The AI provides a detailed explanation for why a specific step is the "Critical Path."

## 4. Auto-Trigger Cascades

The system is built on a "Signal-Driven" architecture:
1. **Completion Event**: A node (Task or Sub-task) is marked `DONE`.
2. **Graph Re-evaluation**: The **Execution Engine** re-sorts and validates the entire plan.
3. **Status Promotion**: Nodes moving from `BLOCKED` to `READY` are flagged.
4. **Autonomous Fire**: Any `AI` type node in `READY` state **Auto-Executes**.
5. **Continuous Loop**: This creates a cascade where an entire hierarchical branch can be completed autonomously.

---
*Next: Read [Understanding the Workflow Plan Engine](./execution-graph-engine.md) to dive deeper into graph states.*
