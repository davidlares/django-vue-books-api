<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Edit Book</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input type="text" placeholder="Title" name="title" class="form-control" v-model.trim="form.title">
                </div>
              </div>

              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea name="description" class="form-control" rows="3" v-model.trim="form.description"></textarea>
                </div>
              </div>

              <div class="rows">
                <div class="col text-center">
                    <b-button type="submit" variant="primary">Edit</b-button>
                    <b-button type="submit" variant="btn-large-space" :to="{name: 'ListBook'}">Cancel</b-button>
                </div>
              </div>

            </form>
          </div>
        </div>
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
      // Getting id from URL
      id: this.$route.params.id,
      form: {
        title: '',
        description: ''
      }
    }
  },
  created() {
    this.getBook()
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      // updating record
      const path = `http://localhost:8000/api/v1/books/${this.id}/`
      axios.put(path, this.form).then((response) => {
        this.form.title = response.data.title
        this.form.description = response.data.description
        swal('Book updated correctly', '', 'success')
      }).catch((err) => {
        console.log(err)
      })
    },
    getBook(){
      const path = `http://localhost:8000/api/v1/books/${this.id}/`
      axios.get(path).then((response) => {
        this.form.title = response.data.title
        this.form.description = response.data.description
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
