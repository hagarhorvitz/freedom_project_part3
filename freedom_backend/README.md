# Freedom Vacations Management System - Backend

The backend of the Freedom Vacations Management System is a robust API service built using Django and Django REST Framework (DRF). It powers the frontend by providing secure endpoints APIs for authentication and vacation statistics. 


## Features

- **Authentication:**
    - Secure JWT-based authentication for admin users.
    - Role-based access control using role_id for administrators.
- **Vacation Statistics:**
    - Count of past, ongoing, and future vacations.
    - Total number of users in the system.
    - Total number of likes across all vacations.
    - Like distribution by destination.
    - These statistics provide administrators with insights into user engagement and vacation popularity, enabling data-driven decision-making.
- **Database Integration:**
    - Seamless connection to a MySQL database for efficient query handling.
- **CORS Enabled:**
    - Supports cross-origin requests for seamless integration with modern frontend frameworks like React, ensuring secure and efficient API communication.


## Folder Structure
-The backend is organized into distinct folders and files to maintain modularity, scalability, and clarity. Each component serves a specific purpose in the overall functionality of the system.

### `src` Folder
- **api:**
    - `models.py`: Defines database models for users, vacations, likes, roles and countries.
    - `views.py`: Implements API logic.
    - `serializers.py`: Validates and formats data for the API.
    - `urls.py`: Maps API endpoints.
    - `migrations/`: Tracks changes to database schemas over time.
- **freedom:**
    - `settings.py`: Configures Django and integrates MySQL.
    - `urls.py`: Maps project-wide URLs.
- **utils:**
    - `app_config.py`: Centralized application settings and constants.


## Technologies Used

- **Framework:** Django, Django REST Framework
- **Database Integration:** MySQL, mysqlclient, mysql-connector-python
- **Authentication:** PyJWT
- **Environment Management:** Python dotenv
- **Cross-Origin Resource Sharing:** django-cors-headers
- **Networking:** Requests
- **Containerization:** Docker


## Docker Deployment

- **Please follow the instructions in the overall `README.md` to deploy with Docker.**


## Installation (Without Docker)

1. **Clone the repository:**
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
```

2. **Navigate to freedom_backend:**
```bash
cd freedom_backend
```

3. **Create a virtual environment:**
```bash
python -m venv envFreedom
```

4. **Activate the virtual environment:**
```bash
envFreedom/Scripts/Activate
```

5. **Install dependencies:**
```bash
pip install -r requirements.txt
```

6. **Set up the database:**
- Import the provided MySQL database file (`freedom.sql`) into your MySQL server.

7. **Set up .env with:**
```plain text
MYSQL_HOST = "localhost"
MYSQL_PORT= "3306"
MYSQL_USER = "root"
MYSQL_DATABASE= "freedom"
MYSQL_PASSWORD = ""
SECRET_KEY = <your-secret-key>
```

8. **Run the server:**
```bash
python src/manage.py runserver
```


## License

This project is for educational purposes only and follows the terms provided by the course.








