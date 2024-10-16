## Task Management Application

This is a simple Task Management Application where users can add, view, and delete tasks. The application consists of two main parts:

- Backend API: Built with Node.js and Prisma ORM for managing tasks.
- Frontend Application: Built with React (using Vite) to interact with the API.

### Features

- List Tasks: View a list of tasks.
- Add Task: Add new tasks to the list.
- Delete Task: Delete tasks.


### Technologies Used

#### Backend
- Node.js with Express.js
- Prisma ORM with PostgreSQL as the database
- PostgreSQL for task management

#### Frontend
- React (Vite) for frontend development
- Tailwind CSS for UI styling

## Setup Instructions

### Backend Setup (Node.js + Express + Prisma ORM)

- Install Dependencies
Ensure you have Node.js version 16.13 or higher installed.
Install PostgreSQL and set up the database.

1. Clone the repository and navigate to the backend folder:
```bash
cd task-manager-backend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Create a .env file in the root directory and add your PostgreSQL connection URL:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/taskdb?schema=public"
```

4. Install Prisma CLI (if not already installed):
```bash
npm install prisma --save-dev
```

5. Run Prisma migrations to set up the database schema:
```bash
npx prisma migrate dev --name init
```

6. Start the backend server:
```bash
node app.js
```

#### Backend Dependencies:
- express: Web framework for Node.js.
- prisma: ORM to manage the database.
- body-parser: Middleware for parsing JSON requests.

#### Backend Ports:
By default, the backend runs on port 3000. Make sure no other process is running on this port or configure it in .env.


### Frontend Setup (React + Vite + TailwindCSS)

- Install Dependencies

1. Navigate to the frontend folder:
```bash
cd task-manager-frontend
```

2. Install frontend dependencies:
```bash
npm install
```

3. If you're using Tailwind CSS (as suggested in the UI design), ensure Tailwind is configured. You can modify the tailwind.config.js file if necessary.

4. Proxy configuration: If your backend is running on a different port (like http://localhost:3000), configure the proxy settings in vite.config.js:
```bash
export default {
  server: {
    proxy: {
      '/tasks': 'http://localhost:3000',  // Your backend port
    },
  },
};
```
- Start the Frontend Application
```bash
npm run dev
```

#### The frontend application will run on http://localhost:5173 by default.

#### Frontend Dependencies:
- react: For building the user interface.
- vite: Fast build tool for modern web projects.
- tailwindcss: CSS framework for rapid UI development.

### Running the Project

#### Backend
1. Ensure PostgreSQL is running and accessible.
2. Run the backend server:
```bash
cd task-manager-backend
node app.js
```

#### Frontend
1. Start the frontend using Vite:
```bash
cd task-manager-frontend
npm run dev
```

Visit http://localhost:5173 to see the task manager in action.

### Endpoints
#### Backend API
- GET /tasks: Retrieve a list of all tasks.
- POST /tasks: Add a new task. The request body should include the task description.
- DELETE /tasks/:id: Delete a task by ID.

#### Task Schema:
```bash
{
  "id": 1,
  "description": "Example task",
  "created_at": "2024-07-30T12:00:00Z"
}
```

### Project Structure
```bash
task-manager/
├── task-manager-backend/
│   ├── app.js              // Express server with API routes
│   ├── prisma/
│   │   └── schema.prisma    // Prisma schema for PostgreSQL
│   ├── .env                 // Environment variables
│   └── package.json         // Backend dependencies
├── task-manager-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskManager.jsx   // TaskManager React component
│   │   ├── App.jsx               // Main App component
│   │   └── main.jsx              // Root rendering file
│   ├── tailwind.config.js        // Tailwind CSS configuration
│   ├── vite.config.js            // Vite configuration with proxy settings
│   └── package.json              // Frontend dependencies
```



