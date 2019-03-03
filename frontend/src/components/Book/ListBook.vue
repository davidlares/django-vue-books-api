<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div>
          <h2> Book List </h2>
          <b-button size="sm" :to="{name : 'NewBook'}" variant="primary">Create</b-button>
        </div>
        <br>
        <div class="col-md-12">
          <b-table striped hover :items="books" :fields="fields">
            <template slot="action" slot-scope="data">
              <b-button size="sm" variant="primary" :to="{name: 'EditBook', params: {id: data.item.id}}"> Edit</b-button>
              <b-button size="sm" variant="danger" :to="{name: 'DeleteBook', params: {id: data.item.id}}"> Delete</b-button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      fields: [
        {key: 'title', label: 'Title'},
        {key: 'description', label: 'Description'},
        {key: 'action', label: 'Action'},
      ],
      books: [],
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      // this is the Django API route
      const path = 'http://localhost:8000/api/v1/books/'
      axios.get(path).then((response) => {
        console.log('yep')
        this.books = response.data
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
