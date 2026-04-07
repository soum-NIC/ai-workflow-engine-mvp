# Interface and Navigation Guide

PlanPilot features a high-performance **Glassmorphic Interface** designed for monitoring and high-speed hierarchical interaction.

## 1. The Execution Engine (3-Mode Board)

The heart of the project interface is the **Execution Engine**, which offers three distinct views for managing your Workflow Plan:

### 📋 Board Mode (Kanban)
- **Status Columns**: Work items are grouped by their execution state: `Blocked`, `Ready`, `Running`, and `Done`.
- **Drag-and-Drop**: Safely move tasks between columns. The engine prevents invalid moves (e.g., fulfilling a task that is logically blocked).
- **Sub-task Indicators**: Cards show their hierarchy level and parent-child connections.

### 🗺️ Map Mode (Roadmap)
- **Vertical Hierarchy**: A drill-down list showing Parent Tasks and their constituent Sub-tasks.
- **Dependency Paths**: Clear visual lines showing the execution sequence from start to finish.
- **Progress Tracking**: Holistic view of how sub-task completion rolls up into task-level `DONE` states.

### 🕸️ Graph Mode (Dependency Canvas)
- **Visual Nodes**: Every Work Item is represented as a node on an interactive canvas.
- **Node Handles**: Drag from one node's handle to another to create a `depends_on` relationship.
- **Validation-First Editing**: The canvas instantly validates every connection, rejecting circular dependencies with clear error messages.

## 2. Global Control Center

- **Project Overview**: Live track of "Workflow Completion %" and "Critical Path" status.
- **Next Strategic Move**: High-priority recommendations based on which `READY` work items unblock the most downstream logic.
- **Runtime Surgery (Modals)**: Use the "Add Work Item" button to inject manual steps into an AI-generated plan.

## 3. Persistent Workspace Logic

- **LocalStorage Sync**: Edits made during "Runtime Surgery" (Add/Connect/Disconnect) are persisted in LocalStorage to maintain your customized plan.
- **Demo Mode Protection**: Demo projects remain read-only to ensure baseline plan structures are always referenceable.

## 4. Initialization (The Kickoff)

When starting a "New Kickoff":
- **Project Goal**: Define your objective; the AI will architect the initial hierarchical graph.
- **Execution Guardrails**: Set specific constraints that the Engine will respect when defining dependencies and sub-tasks.

---
*Next: Read [AI Agent Rules](./ai-agent-rules.md) to understand the system's structural constraints.*
