from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.log_in),
    path("logout/", views.log_out),
    path("total_vacations/", views.get_vacations_by_date_status),
    path("total_users/", views.get_all_users),
    path("total_likes/", views.get_all_likes),
    path("total_country_likes/", views.get_likes_by_destination),
]