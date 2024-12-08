# Freedom Vacations Management System

The Freedom Vacations Management System is a comprehensive, full-stack application built for administrators to efficiently manage vacation data and access valuable statistics. Designed with scalability and maintainability in mind, this system leverages modern technologies and is structured into three key components: Backend, Frontend, and Database. Each component is containerized using Docker, ensuring seamless deployment and consistent environments.


## Project Overview

- **The system allows administrators to**:
    - Manage vacation data such as destinations, dates, and likes.
    - View detailed statistics, including total vacations, users, likes, and geographical distribution of user activity.
    - Enhance performance with efficient data handling, caching via local state and local storage, and optimized database interactions.
    - Authenticate and authorize users securely with JWT-based authentication.
This project demonstrates the integration of robust backend technologies, a dynamic and user-friendly frontend, and an efficient database structure.


## Project Structure

### 1. Backend (`freedom_backend`)
The backend is built with **Django** and **Django REST Framework (DRF)**, providing a robust API for frontend, with key features including:
- **Authentication**: Implements secure JWT-based authentication for admin users.
- **Statistics API**: Returns aggregated data such as total vacations, likes by country, and user counts.
- **Database Integration**: Connects to a MySQL database using the Django ORM, generating efficient queries for data handling.
- **Modular Design**: Organized into models, serializers, and views for maintainability and scalability.
- **CORS Enabled**: Ensures compatibility with the React-based frontend.

#### Key Files:
- `settings.py`: Configures the Django project and integrates the MySQL database.
- `models.py`: Defines database models for users, vacations, likes, and countries.
- `views.py`: Implements REST API endpoints for data access and management.
- `serializers.py`: Handles data validation and transformation for API responses.
- `Dockerfile`: Creates a Docker image for the backend.
- `requirements.txt`: Lists the required Python dependencies.

**For more about the server side, please refer to the `freedom_backend` folder**


### 2. Frontend (`freedom_frontend`)
The frontend is developed using **React** and **TypeScript**, offering an intuitive, responsive interface for administrators, with features include:
- **Authentication**: Implements JWT-based authentication to control access.
- **Dynamic Data Management**: Retrieves and displays real-time vacation statistics and user data.
- **Efficient State Handling**: Utilizes Redux for global state management and local storage for caching and minimize API calls and ensure smooth user experiences and system efficiency.
- **Material-UI (MUI)**: Ensures a modern, visually appealing design with pre-styled components.

#### Subfolders in `src`:
- **`Components`**: Contains reusable and modular UI components such as forms, menus, statistics displays, and more.
- **`Context`**: Defines shared contexts, such as notification management using `NotifyContext.ts`.
- **`Models`**: Includes **TypeScript** interfaces to define data structures, such as `UsersModel.ts` and `StatisticsProps.ts`.
- **`Redux`**: Manages application-wide state with files like `Reducers.ts` and `State.ts`.
- **`Services`**: Contains service files for API calls, such as `UserService.ts` and `StatisticsDataService.ts`.
- **`Utils`**: Provides helper utilities, such as configuration (`AppConfig.ts`) and notification handling (`Notify.ts`).

#### Key Files:
- `App.tsx`: Entry point for the React app, defining routes and global context.
- `Dockerfile`: Builds the Docker image for the frontend.
- `package.json`: Lists dependencies and scripts for development and production.

**For more about the client side, please refer to the `freedom_frontend` folder**


### 3. Database (`freedom_database`)
The database is powered by MySQL, storing and managing all essential data for the application.
#### Key Tables:
- **Users**: Stores user credentials, roles, and activity status.
- **Roles**: Defines user roles (Admin/Regular User).
- **Vacations**: Contains vacation details like dates, description, destination and more.
- **Likes**: Tracks vacation likes by users.
- **Countries**: Lists available vacation destinations.

#### Key Files:
- `freedom.sql`: Contains the schema and data for initializing the MySQL database.
- `Dockerfile`: Builds a MySQL Docker image for easy setup and integration.


## Docker Deployment

The project is fully containerized, enabling smooth setup and deployment across environments. The docker-compose.yml orchestrates all components.
Steps to Deploy:
1. Clone the repository:
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
cd freedom_part3

2. Build and Run Containers:
docker-compose up --build

3. Access the Application:
Backend: http://localhost:8000/
Frontend: http://localhost:3000/


## Installation (Without Docker)

### Backend:
1. Navigate to freedom_backend:
cd freedom_backend
2. Create a virtual environment and install dependencies:
python -m venv envFreedom
source envFreedom/bin/activate
pip install -r requirements.txt
3. Configure the .env file and run the server:
python src/manage.py runserver
### Frontend:
1. Navigate to freedom_frontend:
cd freedom_frontend
2. Install dependencies:
npm install
3. Start the development server:
npm start


## Technologies Used

- **Backend**: 
    - Django
    - Django REST Framework
    - Python-dotenv
    - django-cors-headers
    - mysql-connector-python
    - mysqlclient
    - requests
- **Frontend**:
    - React
    - TypeScript
    - Redux
    - axios
    - React Router
    - notistack
    - Material-UI
- **Database**:
    - MySQL
- **Authentication**:
    - JSON Web Tokens (JWT)
        - **Backend**: PyJWT
        - **Frontend**: jwt-decode
- **Containerization**:
    - Docker (for both backend and frontend services)


## License

This project is for educational purposes only and follows the terms provided by the course.