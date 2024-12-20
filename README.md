# Freedom Vacations Management System

The Freedom Vacations Management System is a comprehensive, full-stack application built for administrators to efficiently manage and analyze vacation statistics. Designed with modern development practices, this system features a React-based frontend, a Django-powered backend, and a MySQL database. Containerized using Docker, the project ensures a seamless development and deployment experience.


## Project Overview
- This project is part of an ongoing learning journey, showcasing the seamless integration of a modern frontend, a robust backend, and a relational database.

### This system provides administrators with the ability to:
- **Access statistics:** 
    - View aggregated data, such as total vacations, likes by country, and user activity metrics.
- **Ensure data consistency:**
    - Efficiently manage state and local storage for optimized performance.
- **Secure authentication:**
    - Enable JWT-based authentication for secure admin access.


## Project Structure

- **For more detailed information, setup instructions, and features, please refer to the respective `README.md` files in the `freedom_backend` and `freedom_front` folders.**

### 1. Backend (`freedom_backend`)
- **Framework:** Django and Django REST Framework (DRF).
- **Authentication:** Secure JWT-based authentication.
- **API Features:** Provides endpoints for statistics aggregation and user management.
- **Dockerized:** Built and deployed in a Docker container for consistent environments.

### 2. Frontend (`freedom_front`)
- **Framework:** React with TypeScript.
- **Authentication:** Secure JWT-based authentication.
- **State Management:** Redux for global state, with local storage for caching.
- **API Interactions:** Powered by Axios for seamless communication with the backend.
- **Dockerized:** The frontend runs in a Docker container for consistent deployment.

### 3. Database (`freedom_database`)
- **Database:** MySQL.
- **Schema:** Includes tables for users, vacations, likes, countries and roles.
- **Dockerized:** Runs in a Docker container, initialized with the `freedom.sql` schema.



## Technologies Used

- **Backend:** Django, Django REST Framework, Python-dotenv, PyJWT django-cors-headers, mysqlclient
- **Frontend:** React, TypeScript, Redux, Axios, jwt-decode, Material-UI
- **Database:** MySQL
- **Containerization:** Docker (for both backend and frontend services)


## Docker Deployment
- Using Docker to ensure a consistent and isolated environment, simplifying deployment and minimizing compatibility issues across different systems. This approach is particularly useful when working with complex projects that involve multiple services like a frontend, backend, and database.

1. **Clone the repository:**
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
```
- **If needed, navigate to the freedom project main folder:**
```bash
cd freedom_part3
```

2. **Build and Run Containers:**
```bash
docker-compose up --build
```

3. **Access the Application:**
```bash
Backend: http://localhost:8000/
Frontend: http://localhost:3000/
```


## Installation (Without Docker)

### Clone the repository:
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
```
- **If needed, navigate to the freedom project main folder:**
```bash
cd freedom_part3
```

### Backend:
1. **Navigate to `freedom_backend`:**
```bash
cd freedom_backend
```
2. **Create a virtual environment:**
```bash
python -m venv envFreedom
```
3. **Activate the virtual environment:**
```bash
envFreedom/Scripts/Activate
```
4. **Install dependencies:**
```bash
pip install -r requirements.txt
```
5. **Set up the database:**
- Import the provided MySQL database file (`freedom.sql`) into your MySQL server.
6. **Set up .env with:**
```plain text
MYSQL_HOST = "localhost"
MYSQL_PORT= "3306"
MYSQL_USER = "root"
MYSQL_DATABASE= "freedom"
MYSQL_PASSWORD = ""
SECRET_KEY = <your-secret-key>
```
7. **Run the server:**
```bash
python src/manage.py runserver
```

### Frontend:
1. **Navigate to `freedom_front`:**
```bash
cd freedom_front
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```


## License

This project is for educational purposes only and follows the terms provided by the course.


## Troubleshooting

- **Docker Errors**:
    - Ensure Docker Desktop is running before executing any Docker commands.
    - Use `docker-compose down` to stop all containers if you encounter port conflicts.

- **Database Connection Issues**:
    - Verify that your `.env` file contains correct database credentials.
    - Ensure MySQL server is running and accessible at the specified host and port.

- **Environment Issues**:
    - Make sure your Python and Node.js versions meet the project requirements.
    - Use `python --version` and `node --version` to confirm the versions installed on your system.
