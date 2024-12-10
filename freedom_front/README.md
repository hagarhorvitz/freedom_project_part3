# Freedom Vacations Management System - Frontend

The frontend is the user interface of the Freedom Vacations Management System, built with React and TypeScript. It features JWT-based authentication, responsive design, and interactive dashboards for administrators. It communicates with the backend via REST APIs to display vacation data and statistics.


## Features

- **Authentication:**
    - Secure login form using JWT-based authentication.
    - Credentials are sent to the backend for validation.
    - Token stored in local storage for session management.
    - The application dynamically checks the token to maintain user sessions.
- **Statistics Dashboard:**
    - Provides administrators with key insights, including total users, vacations, countries, and likes.
    - Caches aggregated data in local storage to enhance performance. By minimizing API calls, the application ensures faster responses and reduces server load.
- **API Interaction:**
    - Communicates with the backend API for authentication, statistics retrieval, and session management.
    - Uses Axios for efficient and secure API requests.
- **Routing & Navigation:**
    - Utilizes React Router for smooth navigation between pages.
- **Responsive Design:** 
    - Built with Material-UI and CSS Modules for a modern, adaptive interface.
- **Error Handling:**
    - Displays error messages using `notistack` with Material-UI’s Snackbar and Alert.


## Saving Data to Local State and Storage
- To ensure optimal performance and user experience, the application employs a hybrid approach to managing data through local state and browser storage:

- **Local State:**
    - Redux is used for managing global application state, ensuring consistent and efficient updates across components.
    - Examples include storing vacation statistics and managing user session data while the app is running.

- **Local Storage:**
    - User authentication tokens (JWT) are securely stored in the browser's local storage for persistent login sessions. On logout, the token is removed from local storage to protect user data.
    - Vacation statistics (total users, vacations, likes, etc.) are stored in local storage to reduce unnecessary API calls. Before fetching data, the application checks whether the data in the local state matches the data in local storage, ensuring consistency and minimizing delays.


## Folder Structure
- The folder structure is designed to ensure modularity and maintainability, with each folder serving a distinct purpose.

### `src` Folder
- **Utils:**
    - `AppConfig.ts`: Stores application-level configurations, such as API base URLs.
    - `Notify.ts`: Implements reusable notifications using `notistack` with Material-UI's Snackbar and Alert components.

- **Services:**
    - `StatisticsDataService.ts`: Fetches vacation statistics data.
    - `UserService.ts`: Manages user-related API calls, such as login and logout.

- **Redux:**
    - `Reducers.ts`: Defines reducers to handle state changes.
    - `State.ts`: Manages application state and Redux slices.

- **Models:**
    - `ChartStyle.ts`: Defines styling properties for charts.
    - `CredentialModel.ts`: Represents user credentials for login.
    - `StatisticsProps.ts`: Manages properties for displaying statistics.
    - `UsersModel.ts`: Handles user data types (e.g., `email`, `password`, `role_id`).

- **Context:**
    - `NotifyContext.ts`: Provides a global notification system for displaying alerts and messages across the app.

- **Components:**
    - **Home/HomePage:**
        - `HomePage.tsx`: Serves as the landing page of the application.
    - **AboutMe/AboutPage:**
        - `AboutPage.tsx`: A personal introduction of me, offers a glimpse into the person behind the system. This page shares insights about my skills, work ethic, passion for full-stack development, and personal inspirations.
    - **Layout:**
        - `Header`: Displays the top navigation bar.
        - `Menu`: Provides a sidebar navigation menu.
        - `PageNotFound`: Custom error page for invalid routes.
        - `Routing`: Configures and handles app routing.
    - **Statistics:**
        - `AllStatisticsDisplay`: Displays a comprehensive summary of all statistics.
        - `TotalCountriesLikes`: Shows likes distribution by country.
        - `TotalLikes`: Displays the total number of likes.
        - `TotalUsers`: Displays the total registered users.
        - `TotalVacations`: Shows the count of vacations.
    - **Users:**
        - `LoginForm`: Provides a secure login form.
        - `UserMenu`: Displays user-specific navigation options.


## Technologies Used

- **Framework:** React, TypeScript
- **UI Library:** Material-UI (MUI), CSS Modules
- **State Management:** Redux, local storage
- **API Interactions:** Axios
- **Authentication:** jwt-decode
- **Routing:** React Router
- **Error Handling:** Notistack
- **Containerization:** Docker


## Docker Deployment

- **Please follow the instructions in the overall `README.md` to deploy with Docker.**


## Installation (Without Docker)

1. **Clone the repository:**
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
```

2. **Navigate to freedom_front:**
```bash
cd freedom_front
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm start
```


## License

This project is for educational purposes only and follows the terms provided by the course.