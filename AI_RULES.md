# AI Rules and Project Guidelines

This document outlines the technical stack and specific rules for development within this project, ensuring consistency, maintainability, and adherence to best practices.

## 1. Tech Stack Overview

1.  **Framework:** React (v18) with TypeScript.
2.  **Build Tool:** Vite (using SWC for fast compilation).
3.  **Styling:** Tailwind CSS for utility-first styling, including responsive design and animations (`tailwindcss-animate`).
4.  **UI Library:** shadcn/ui, built on top of Radix UI primitives, for high-quality, accessible components.
5.  **Routing:** React Router DOM for client-side navigation.
6.  **Form Management:** React Hook Form for handling form state and Zod for schema validation.
7.  **Data Fetching:** TanStack Query (React Query) for server state management (used for potential future backend integration).
8.  **Icons:** Lucide React.
9.  **Notifications:** Sonner for modern, user-facing toasts.
10. **Content Management:** Custom `useContent` hook for managing editable static content (stored locally in the browser).

## 2. Library Usage Rules

| Feature | Recommended Library/Tool | Specific Rule |
| :--- | :--- | :--- |
| **UI Components** | shadcn/ui (Radix UI) | Always use pre-built shadcn components. If customization is needed beyond props, create a new component wrapper. |
| **Styling** | Tailwind CSS | Use utility classes exclusively. Ensure designs are responsive by default. |
| **Routing** | React Router DOM | All main routes must be defined in `src/App.tsx`. Use the `NavLink` component for navigation links. |
| **Forms & Validation** | React Hook Form + Zod | Use React Hook Form for all complex forms. Use Zod for defining validation schemas. |
| **Server State/Data** | TanStack Query | Use for managing asynchronous data fetching, caching, and synchronization. |
| **Notifications** | Sonner | Use the `Sonner` component for general user feedback (toasts). |
| **Icons** | Lucide React | Use icons from this library only. |
| **Static Content** | `src/hooks/useContent.tsx` | All editable text, links, and images (stored as base64) must be accessed via the `useContent` hook. |

## 3. Code Structure and Conventions

*   **Directory Structure:**
    *   `src/pages/`: Top-level route components (e.g., `Index.tsx`, `Admin.tsx`).
    *   `src/components/`: Reusable UI components.
    *   `src/hooks/`: Custom React hooks.
    *   `src/lib/`: Utility functions (`utils.ts`).
*   **Component Size:** Aim for small, focused components (ideally under 100 lines). Create a new file for every new component or hook.
*   **Imports:** Use path aliases (`@/`) for internal imports (e.g., `@/components/Button`).
*   **Simplicity:** Prioritize simple, elegant solutions. Avoid over-engineering complex error handling or fallback mechanisms unless explicitly requested.