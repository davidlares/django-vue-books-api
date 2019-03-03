# endpoints

from rest_framework import routers
from .viewsets import BookViewSet

# this class will call routes for the model (CRUD and more)
router = routers.SimpleRouter()
router.register('books', BookViewSet)

urlpatterns = router.urls
