from datetime import datetime
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import *


class CountriesSerializer(ModelSerializer):
    likes = SerializerMethodField()

    class Meta:
        model = CountriesModel
        fields = "__all__"
    
    def get_likes(self, country_obj):
        try:
            likes_by_country = LikesModel.objects.filter(vacation__country = country_obj.country_id).count()
            return likes_by_country
        except LikesModel.DoesNotExist:
            return 0
    


class LikesSerializer(ModelSerializer):
    total_likes = SerializerMethodField()

    class Meta:
        model = LikesModel
        fields = "__all__"
    
    def get_total_likes(self, obj):
        return LikesModel.objects.count()
    
    def __init__(self, *args, **kwargs):
        context = kwargs.get('context', {})
        if context.get('only_total_likes'):
            self.Meta.fields = ['total_likes']
        super().__init__(*args, **kwargs)



class RolesSerializer(ModelSerializer):

    class Meta:
        model = RolesModel
        fields = "__all__"



class UsersSerializer(ModelSerializer):

    class Meta:
        model = UsersModel
        # fields = "__all__" 
        exclude = ["password", "role"]



class VacationsSerializer(ModelSerializer):
    past_vacations = SerializerMethodField()
    on_going_vacations = SerializerMethodField()
    future_vacations = SerializerMethodField()
    today = datetime.today().date()

    class Meta:
        model = VacationsModel
        fields = "__all__"
    
    def get_past_vacations(self, obj):
        return VacationsModel.objects.filter(end_date__lt = self.today).count()
    
    def get_on_going_vacations(self, obj):
        return VacationsModel.objects.filter(start_date__lte = self.today, end_date__gte = self.today).count()

    def get_future_vacations(self, obj):
        return VacationsModel.objects.filter(start_date__gt = self.today).count()
    
    def __init__(self, *args, **kwargs):
        context = kwargs.get('context', {})
        if context.get('only_vacations_status_count'):
            self.Meta.fields = ['past_vacations', 'on_going_vacations', 'future_vacations']
        super().__init__(*args, **kwargs)
