from django.contrib.auth.hashers import check_password, make_password
from freedom import settings
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from datetime import datetime, timedelta
import jwt


def check_token_authorization(request):
    token = request.headers.get('Authorization')
    if not token:
        return "Access denied! Only for logged in users!"
    token_type, token_value = token.split() 
    if token_type.lower() != "bearer":
        return "Invalid token type"
    if not token_value:
        return "Invalid token value"
    return "ok"


@api_view(["POST"])
def log_in(request):
    try:
        email = request.data.get('email')
        password = request.data.get('password')
        if not email or not password:
            return Response({"Error": "Missing field (email and password are required)"}, status=status.HTTP_400_BAD_REQUEST)
        user = UsersModel.objects.get(email=email)
        if not check_password(password, user.password):
            return Response({"Error": "Invalid password or email"}, status=status.HTTP_401_UNAUTHORIZED)
        admin_role = RolesModel.objects.get(role_title='Admin')
        if user.role.role_id != admin_role.role_id:
            return Response({"Error": "Permission denied - Only Admins are allowed"}, status=status.HTTP_403_FORBIDDEN)
        if user.active.active_id == 1:
            update_user_active_serializer = UsersSerializer(user, data={'active': 2}, partial=True)
            if not update_user_active_serializer.is_valid(): 
                return Response({"Error": update_user_active_serializer.errors}, status = status.HTTP_400_BAD_REQUEST)
            update_user_active_serializer.save()
        user_serializer = UsersSerializer(user)
        payload_token = {
            'user': user_serializer.data,
            'exp': int((datetime.utcnow() + timedelta(hours=24)).timestamp()),
        }
        jwt_token = jwt.encode(
            payload_token, settings.SECRET_KEY, algorithm='HS256')
        return Response(jwt_token)
    except UsersModel.DoesNotExist:
        return Response({"Error": "Invalid email or password"}, status=status.HTTP_404_NOT_FOUND)
    except RolesModel.DoesNotExist:
        return Response({"Error": "Admin role doesn't exist"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def log_out(request):
    try:
        id = request.data.get('user_id')
        user = UsersModel.objects.get(user_id=id)
        if user.active.active_id == 2: 
            user_serializer = UsersSerializer(user, data={'active': 1}, partial=True)
            if not user_serializer.is_valid():
                return Response({"Error": user_serializer.errors}, status = status.HTTP_400_BAD_REQUEST)
            user_serializer.save() 
        return Response({"Success": "Success"}, status=status.HTTP_200_OK)
    except UsersModel.DoesNotExist:
        return Response({"Error": "No user exist by this id"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def get_vacations_by_date_status(request):
    try:
        checkToken = check_token_authorization(request)
        if checkToken != "ok":
            return Response({"Error": checkToken}, status=status.HTTP_404_NOT_FOUND)
        all_vacations = VacationsModel.objects.all()
        vacations_serializer = VacationsSerializer(
            all_vacations, context={'only_vacations_status_count': True})
        return Response(vacations_serializer.data)
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def get_all_users(request):
    try:
        checkToken = check_token_authorization(request)
        if checkToken != "ok":
            return Response({"Error": checkToken}, status=status.HTTP_404_NOT_FOUND)
        all_users = UsersModel.objects.count()
        return Response({'total_users': all_users})
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def get_all_likes(request):
    try:
        checkToken = check_token_authorization(request)
        if checkToken != "ok":
            return Response({"Error": checkToken}, status=status.HTTP_404_NOT_FOUND)
        all_likes = LikesModel.objects.all()
        likes_serializer = LikesSerializer(all_likes.first(), context={
                                           'only_total_likes': True})
        return Response(likes_serializer.data)
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def get_likes_by_destination(request):
    try:
        checkToken = check_token_authorization(request)
        if checkToken != "ok":
            return Response({"Error": checkToken}, status=status.HTTP_404_NOT_FOUND)
        countries = CountriesModel.objects.all().order_by('country_name')
        countries_serializer = CountriesSerializer(countries, many=True)
        data_list = list({"destination": country["country_name"], "likes": country["likes"]}for country in countries_serializer.data)
        return Response(data_list)
    except Exception as err:
        return Response({"Error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



