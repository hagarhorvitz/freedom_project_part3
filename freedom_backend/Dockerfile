FROM python:3

WORKDIR /app

RUN python -m venv envFreedom

COPY requirements.txt /app

RUN /app/envFreedom/bin/pip install -r requirements.txt

COPY . /app

ENTRYPOINT /app/envFreedom/bin/python src/manage.py runserver 0.0.0.0:8000