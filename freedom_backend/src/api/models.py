#This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
# *Rearrange models' order
# *Make sure each model has one field with primary_key=True
# *Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
# *Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

from django.db.models import Model, AutoField, CharField, ForeignKey, DateField, IntegerField, RESTRICT, CASCADE
from django.core.validators import MinLengthValidator, MaxLengthValidator, MaxValueValidator, MinValueValidator


class CountriesModel(Model):
    country_id = AutoField(primary_key=True)
    country_name = CharField(max_length=100, validators=(MinLengthValidator(2), MaxLengthValidator(100)))

    class Meta:
        managed = False
        db_table = 'countries'


class RolesModel(Model):
    role_id = AutoField(primary_key=True)
    role_title = CharField(max_length=45, validators=(MinLengthValidator(2), MaxLengthValidator(45)))

    class Meta:
        managed = False
        db_table = 'roles'


class ActiveModel(Model):
    active_id = AutoField(primary_key=True)
    active_status = CharField(max_length=20, validators=(MinLengthValidator(2), MaxLengthValidator(20)))

    class Meta:
        managed = False
        db_table = 'active'


class UsersModel(Model):
    user_id = AutoField(primary_key=True)
    first_name = CharField(max_length=45, validators=(MinLengthValidator(2), MaxLengthValidator(45)))
    last_name = CharField(max_length=45, validators=(MinLengthValidator(2), MaxLengthValidator(45)))
    email = CharField(max_length=60, validators=(MinLengthValidator(5), MaxLengthValidator(60)))
    password = CharField(max_length=200, validators=(MinLengthValidator(4), MaxLengthValidator(200)))
    role = ForeignKey(RolesModel, on_delete=RESTRICT)
    active = ForeignKey(ActiveModel, on_delete=RESTRICT)

    class Meta:
        managed = False
        db_table = 'users'


class VacationsModel(Model):
    vacation_id = AutoField(primary_key=True)
    country = ForeignKey(CountriesModel, on_delete=RESTRICT)
    description = CharField(max_length=250, validators=(MinLengthValidator(5), MaxLengthValidator(250)))
    start_date = DateField()
    end_date = DateField()
    price= IntegerField(validators=(MinValueValidator(0), MaxValueValidator(10000)))
    image_name = CharField(max_length=300, validators=(MinLengthValidator(1), MaxLengthValidator(300)))

    class Meta:
        managed = False
        db_table = 'vacations'


class LikesModel(Model):
    like_id = AutoField(primary_key=True)
    user = ForeignKey(UsersModel, on_delete=RESTRICT)
    vacation = ForeignKey(VacationsModel, on_delete=CASCADE)

    class Meta:
        managed = False
        db_table = 'likes'


