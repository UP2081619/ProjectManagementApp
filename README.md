# ProjectManagementApp
 Prototype for Assignment 

# Project Management App

A React-based project management application that allows users to create projects, add tasks, and manage their workflow efficiently.

## Features

- Create and manage multiple projects
- Add, edit, and delete tasks within projects
- Drag-and-drop functionality for task reordering
- Set task priorities and due dates
- Mark tasks as complete
- Basic analytics for task tracking

## Technologies Used

- React
- react-beautiful-dnd for drag-and-drop functionality
- Local Storage for data persistence

## Getting Started

### Prerequisites

- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository: git clone https://github.com/HolyApex07/project-management-app.git
2. Navigate to the project directory:cd project-management-app
3. Install the dependencies: npm install
4. Start the development server: npm start
5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. Create a new project by entering a project name and clicking "Add Project".
2. Select a project from the list to view and manage its tasks.
3. Add new tasks to the selected project using the task form.
4. Drag and drop tasks to reorder them within the project.
5. Mark tasks as complete by checking the checkbox next to them.
6. Delete tasks using the delete button.
7. View basic analytics about your tasks and projects.

## Project Structure

- `src/App.js`: Main component that manages the overall state and renders child components
- `src/components/ProjectList.js`: Manages the list of projects and project creation
- `src/components/TaskList.js`: Displays and manages the list of tasks, including drag-and-drop functionality
- `src/components/TaskForm.js`: Handles the creation of new tasks
- `src/components/Analytics.js`: Displays basic analytics about tasks and projects

## Future Improvements

- User authentication and authorization
- Backend integration for data persistence
- More detailed analytics and reporting features
- Task editing functionality
- Collaborative features for team projects

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
