🧩 React JS, JSX, and CSS Mastering Project
📘 Overview

This Assignment demonstrates the mastery of React JS, JSX, and Tailwind CSS through a structured approach that includes component-based architecture, state management, API integration, and responsive design.

🚀 Task Breakdown
Task 1: Project Setup

✅ Created a new React application using Vite

✅ Installed and configured Tailwind CSS

✅ Set up a structured folder layout:

src/


├── components/


├── context/


├── hooks/


├── pages/


├── utils/


├── App.jsx


├── main.jsx


└── index.css


✅ Configured React Router for navigation between pages

Task 2: Component Architecture

Created reusable and modular UI components:

Component	Description
Button	Supports multiple variants — primary, secondary, and danger
Card	Displays content in a boxed layout
Navbar	Provides site navigation links
Footer	Includes links and copyright information
Layout	Wraps pages with Navbar and Footer for consistent design

All components use props to allow customization and reusability.

Task 3: State Management & Hooks

Implemented a Task Manager component with CRUD functionality.

✳️ Features:

Add new tasks

Mark tasks as completed

Delete tasks

Filter tasks (All / Active / Completed)

🧠 React Hooks Used:

useState → Manage local state

useEffect → Handle side effects (e.g., loading tasks)

useContext → Theme management (Light / Dark mode)

Custom Hook: useLocalStorage → Persist tasks in local storage

Task 4: API Integration

Fetched and displayed data from a public API (JSONPlaceholder).

🌐 Features:

Fetch data dynamically

Display results in a list/grid layout

Handle loading and error states

Implement pagination / infinite scrolling

Add a search filter for quick data lookup

Task 5: Styling with Tailwind CSS

Leveraged Tailwind CSS for elegant, responsive design.

💅 Key Styling Features:

Mobile-first responsive design

Theme switcher (Light/Dark mode) using Tailwind’s darkMode

Utility classes for:

Layout

Spacing

Typography

Colors

Custom animations and transitions for interactive elements

⚙️ Installation & Setup
# Clone this repository
git clone <your-repo-url>

# Navigate to the project directory
cd react-js-jsx-and-css-mastering

# Install dependencies
npm install

# Run the development server
npm run dev


The app will start at http://localhost:5173/
 (default Vite port).

📸 Screenshots


[[Screenshot1](./screenshots/screenshot1.PNG)]


[[Screenshot2](./screenshots/screenshot2.PNG)]

	
🧰 Tech Stack

React JS (Vite)

Tailwind CSS

React Router DOM

Context API

JSONPlaceholder API
