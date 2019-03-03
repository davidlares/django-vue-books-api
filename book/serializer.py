# serialize Model for being transported through HTTP in any format
from .models import Book
from rest_framework import serializers

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        # definition (model and field)
        model = Book
        fields = '__all__' # specifies ALL the fields from the model
