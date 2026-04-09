# Plan-Pilot

Plan-Pilot is a high-fidelity, AI-driven project management and workflow engine designed to streamline complex mission execution. It provides a stable, action-oriented interface for managing distributed tasks with intelligent sequencing and contextual reasoning.

## Features

- **Mission Command Kanban**: A high-density, 4-column grid layout designed for rapid action and status tracking without horizontal scrolling.
- **AI Strategy Engine**: Dynamic, Groq-powered contextual mission generation that replaces static mocks with live strategic planning.
- **Graph Visualization**: Interactive workflow sequence visualization (Graph View) for understanding task dependencies and critical paths.
- **Executor Roles**: Clear role-based indicators for task execution, ensuring every mission has a defined owner.
- **Real-time State Management**: Unified execution engine that centralizes workflow state and ensures logical task sequencing (`READY`, `BLOCKED`, `RUNNING`, `DONE`).

## Tech Stack

- **Frontend**: Next.js 15+ (App Router), Tailwind CSS v4 (with custom `@theme`).
- **Authentication**: NextAuth.js v5 (Beta) with MongoDB Adapter and secure bcryptjs hashing.
- **AI Infrastructure**: Groq Cloud for ultra-fast strategic planning and task structuring.
- **API Layer**: Next.js Route Handlers for robust, type-safe internal communication.
- **Database**: MongoDB (via `MongoClient` and repository abstraction).
- **Styling**: Modern Design System with Glassmorphism and Micro-animations.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://gitlab.indianic.com/Brinda2577/plan-pilot.git
   cd plan-pilot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in `apps/frontend/` with your database and API credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GROQ_API_KEY=your_groq_key
   AUTH_SECRET=your_auth_secret
   ```

## Usage

To start the development server for the entire monorepo or the frontend:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Support

For issues or feature requests, please use the project's internal issue tracker on GitLab.

## Roadmap

- [x] Stable Kanban "Mission Command" interface.
- [x] NextAuth.js v5 Integration.
- [x] Dynamic AI Strategy Engine integration.
- [ ] Advanced Graph Visualization interactivity.
- [ ] Multi-agent collaboration protocols.

## Authors and acknowledgment

Developed by the PlanPilot Engineering Team.

## License

This project is proprietary and confidential.

## Project status

Active development. Focus: Stabilizing AI execution protocols and graph visualization.
