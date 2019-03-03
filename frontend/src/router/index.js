import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// importing Books components
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'
import DeleteBook from '@/components/Book/DeleteBook'
import NewBook from '@/components/Book/NewBook'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/:id/edit/',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:id/delete/',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    }
  ],

  // this lets to be used by URLs
  mode: 'history'
})
