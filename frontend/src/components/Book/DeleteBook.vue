<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3> Confirm deletion </h3>
        <p>Title: {{this.element.title}}</p>
        <p>Description: {{this.element.description}}</p>
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-button v-on:click="deleteBook" variant="danger">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data() {
    return {
      id: this.$route.params.id,
      element: {
        title: '',
        description: ''
      }
    }
  },
  created() {
    this.getBook()
  },
  methods: {
    getBook(){
      const path = `http://localhost:8000/api/v1/books/${this.id}/`
      axios.get(path).then((response) => {
        this.element.title = response.data.title
        this.element.description = response.data.description
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteBook(){
      const path = `http://localhost:8000/api/v1/books/${this.id}/`
      axios.delete(path).then((response) => {
        location.href = "/books"
      }).catch((err) => {
        // console.log(err)
        swal("Unable to delete", "", "")
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
