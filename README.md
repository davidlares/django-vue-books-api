# DavidBooks

This repo is a simple demo on Django-Vue Integration by creating a single CRUD for books directory. (workshop)

## Backend side

Django 2.x and DjangoRestFramework with a single Book model. Please refer to the `requirements.txt` for the python dependencies

### Virtualenv

  Simply: `virtualenv [your_env_name]`

### Django Project

- Installing Django: `pip install django`
- Create project: `django-admin startproject [name]`
- Creating an app: `django-admin startapp books`
- Running the Server: `./manage.py runserver`

### Key files for Rest Routes

 - `serializer.py`: the Serializer class lets send model data via HTTP  
 - `viewsets.py`: ViewSet class, CRUD on the Model object
 - `urls.py`: generate Rest URLs using the SimpleRouter() method

 All this files are from the Django Rest Framework package

## Frontend side

The whole frontend app is located on the `/frontend` folder. It actually created with the Vue-Cli template with Webpack.

- [Vue Cli](https://www.npmjs.com/package/vue-cli/)

## Credits
  - [David Lares](https://twitter.com/davidlares3)

## Licence

  - [MIT](https://opensource.org/licenses/MIT)
