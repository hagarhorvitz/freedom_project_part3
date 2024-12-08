# Freedom Frontend

This folder contains the **frontend** of the **Freedom Vacations Management System**, designed specifically for **admins users**. The frontend is built using **React** and **TypeScript**, providing an interactive and user-friendly interface for managing vacation data. It communicates with the backend via REST APIs to display vacation data and statistics.


## Features

- **Authentication**:
    - Secure login form using JWT-based authentication.
    - Credentials are sent to the backend, and upon validation, a JWT token is issued.
    - The token is stored in local storage for session management.
    - The application dynamically checks the token to maintain user sessions.
- **Vacation Statistics**:
    - Displays total users, vacations, and likes.
    - Shows likes distribution by country.
- **Routing & Navigation**:
    - Dynamic routing using React Router for multi-page functionality.
    - Components like Header, Menu, and UserMenu for structured navigation.
- **Responsive Design**: Optimized for various screen sizes using Material-UI and CSS Modules.
- **Error Handling**: Includes a custom `Page Not Found.tsx` page for invalid routes.


## Project Details

### Public Folder
- `index.html`: Root HTML template for the app.
- `manifest.json`: Provides metadata for progressive web app support.
- `robots.txt`: Configures crawler instructions for the website.
- `sun.ico`: App icon.

### `src` Folder
- **Utils** (Utility functions and configurations):
    - `AppConfig.ts`: Stores application-level configurations, such as API base URLs.
    - `Notify.ts`: Implements reusable notifications using Material-UI's Snackbar and Alert components.

- **Services** (Handles all API interactions with the backend):
    - `StatisticsDataService.ts`: Fetches vacation statistics.
    - `UserService.ts`: Manages user-related API calls, such as login and logout.

- **Redux**
    - `Reducers.ts`: Defines reducers to handle state changes.
    - `State.ts`: Manages application state and Redux slices.

- **Models** (Contains TypeScript interfaces and types to ensure data consistency):
    - `ChartStyle.ts`: Defines styling properties for charts.
    - `CredentialModel.ts`: Represents user credentials for login.
    - `StatisticsProps.ts`: Manages properties for displaying statistics.
    - `UsersModel.ts`: Handles user data types (e.g., `email`, `password`, `role_id`).

- **Context**
    - `NotifyContext.ts`: Provides a global notification system for displaying alerts and messages across the app.

- **Components**
    - **Home/HomePage**:
        - `HomePage.tsx`: Serves as the landing page of the application.
    - **AboutMe/AboutPage**:
        - `AboutPage.tsx`: A personal introduction of me, offers a glimpse into the person behind the system. This page shares insights about my skills, work ethic, passion for full-stack development, and personal inspirations.
    - **Layout**:
        - `Header`: Displays the top navigation bar.
        - `Menu`: Provides a sidebar navigation menu.
        - `PageNotFound`: Custom error page for invalid routes.
        - `Routing`: Configures and handles app routing.
    - **Statistics**:
        - `AllStatisticsDisplay`: Displays a comprehensive summary of all statistics.
        - `TotalCountriesLikes`: Shows likes distribution by country.
        - `TotalLikes`: Displays the total number of likes.
        - `TotalUsers`: Displays the total registered users.
        - `TotalVacations`: Shows the count of vacations.
    - **Users**:
        - `LoginForm`: Provides a secure login form.
        - `UserMenu`: Displays user-specific navigation options.


## API Endpoints

- The frontend communicates with the backend's REST APIs for:
- **Authentication**:
    - Login: Sends user credentials to receive a JWT token, which is then saved to the local storage.
    - Logout: Removes JWT token and statistics from the local storage.
- **Statistics**:
    - Fetch total users, vacations, and likes.
    - Retrieve like counts by country.


## Saving Data to Local State and Storage

- The application efficiently manages data using a combination of local state and local storage:
- **Local State**:
    - Redux is used for managing global application state, ensuring consistent and efficient updates across components.
    - Examples include storing vacation statistics and managing user session data while the app is running.
- **Local Storage**:
    - User authentication tokens (JWT) are securely stored in the browser's local storage for persistent login sessions. On logout, the token is removed from local storage to protect user data.
    - Vacation statistics (total users, vacations, likes, etc.) are stored in local storage to reduce unnecessary API calls. Before fetching data, the application checks whether the data in the local state matches the data in local storage, ensuring consistency and minimizing delays.
This hybrid approach ensures fast, secure, and user-friendly interactions throughout the application while reducing server load.


## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
cd freedom_frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```


## Docker Deployment

- The frontend is containerized for deployment. Follow these steps:
1. **Build the Docker image**:
```bash
docker build -t hagarhorvitz/freedom-react-image:1.0 .
```

2. **Run the container**:
```bash
docker run -p 3000:3000 freedom-react-container
```

3. **Alternatively, use docker-compose**:
```bash
docker-compose up
```


## Technologies Used

- **React**: Frontend library for building dynamic UIs.
- **TypeScript**: Provides static typing for robust development.
- **Material-UI (MUI)**: Used for pre-styled, accessible components.
- **Redux**: Manages global state for consistency.
- **React Router**: Enables dynamic routing and navigation.
- **JWT Authentication**: Implements secure token-based authentication for user sessions.
- **CSS Modules**: Ensures scoped styling for each component.
- **Docker**: Facilitates containerized deployment.


## License

This project is for educational purposes only and follows the terms provided by the course.