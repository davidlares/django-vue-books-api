# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

# generate Book Model for API
class Book(models.Model):
    # attrs
    title = models.CharField(max_length = 50)
    description = models.TextField()
    
