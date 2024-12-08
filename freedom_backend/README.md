# Freedom Backend

This folder contains the **backend** of the **Freedom Vacations Management System**. The backend is built using **Django** and **Django REST Framework (DRF)**, providing REST APIs for user authentication, vacation statistics, and like tracking. The backend connects to a **MySQL** database and runs in a **Docker** container for deployment scalability.


## Features

- **Authentication**: JWT-based login and logout functionality with role-based access control (Admins only).
- **Vacation Statistics**:
    - Count of past, ongoing, and future vacations.
    - Total number of users in the system.
    - Total number of likes across all vacations.
    - Like distribution by destination.
- **Database**: Uses a MySQL database with tables for users, roles, vacations, likes, and countries.
- **CORS Enabled**: Supports cross-origin requests, enabling React-based frontend integration.


## Environment Variables

The `.env` file is used to store sensitive information, such as database credentials and the secret key. Ensure the `.env` file is included in the `.gitignore` to avoid exposing sensitive data in public repositories.

- Here are the keys you need to define in your `.env` file:

```plaintext
MYSQL_HOST = "localhost"
MYSQL_PORT= "3306"
MYSQL_USER = "root"
MYSQL_PASSWORD = ""
MYSQL_DATABASE= "freedom"
SECRET_KEY = "your_secret_key"
```


## API Endpoints

- **Authentication**:
    - **Login**: POST /api/login/:
        - Request:
            ```json
            { 
            "email": "admin@example.com", 
            "password": "password" 
            }
            ```
        - Response: Returns a JWT token and update user to active (2 in the database).

    - **Logout**: POST /api/logout/:
        - Request: 
            ```json
            { 
            "user_id": 1 
            }
            ```
        - Response: Logs out the user and update user to not active (1 in the database).

- **Statistics**:
    - **Vacation Status**: GET /api/total_vacations/
        - Returns the count of past, ongoing, and future vacations.
    - **Total Users**: GET /api/total_users/
        - Returns the total number of users in the system.
    - **Total Likes**: GET /api/total_likes/
        - Returns the total number of likes.
    - **Likes by Destination**: GET /api/total_country_likes/
        - Returns like distribution by destination.


## Database Models

- The database uses the following models:
    - **UsersModel**: Stores user details, including first name, last name, email, and hashed passwords. Also tracks user roles and activity status.
    - **RolesModel**: Defines roles for users, such as Admin or Regular User.
    - **VacationsModel**: Stores details about vacations, including dates, description, price, and destination.
    - **LikesModel**: Tracks likes for vacations, linking users to their liked vacations.
    - **CountriesModel**: Lists all available vacation destinations.


## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/hagarhorvitz/freedom_project_part3.git
cd freedom_backend
```

2. **Create a virtual environment and install dependencies**:
```bash
python -m venv envFreedom
envFreedom/Scripts/Activate
pip install -r requirements.txt
```

3. **Set up the database**:
- Import the provided MySQL database file (`freedom.sql`) into your MySQL server.

4. **Configure the .env file with your database credentials.**

5. **Run the server**:
```bash
python src/manage.py runserver
```


## Docker Deployment

- The backend is containerized for deployment. Follow these steps:
1. **Build the Docker image**:
```bash
docker build -t hagarhorvitz/freedom-django-image:1.0 .
```

2. **Run the container**:
```bash
docker run -p 8000:8000 --env-file .env freedom-django-container
```

3. **Alternatively, use docker-compose**:
```bash
docker-compose up
```

## Technologies Used

- **Framework**: Django, Django REST Framework
- **Database**: MySQL
- **Authentication**: JWT
- **Containerization**: Docker
- **Environment Management**: Python dotenv


## License

This project is for educational purposes only and follows the terms provided by the course.








