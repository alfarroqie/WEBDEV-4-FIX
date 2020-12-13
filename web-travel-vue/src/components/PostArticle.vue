<template>
<div id="app">
<div class="container">
  <h2 align="center">Post Artikel</h2>
  <div class="row">
    <div class="col-sm">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="row">
          <label class="control-label col-sm-2">Penulis</label>
          <div class="col-sm-10">
            <input v-model="author" class="form-control" placeholder="Ketikkan penulis artikel">
          </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
          <label class="control-label col-sm-2">Judul</label>
          <div class="col-sm-10">
            <input v-model="title" class="form-control" placeholder="Ketikkan judul artikel">
          </div>
          </div>
        </div>
      </form>
        <vue-editor v-model="content"></vue-editor>
        <button type="button" class="btn btn-success" @click="addNews">Post</button>
    </div>
  </div>
</div>
</div>
</template>


<script>
import { VueEditor } from "vue2-editor";
import NewsDataService from "../services/NewsDataService";
export default {
  components: {
    VueEditor
  },

  data() {
    return {
      author: "",
      title: "",
      content: "",
    };
  },
  methods: {
    addNews: function() {
      const news = {
        author: this.author,
        title: this.title,
        content: this.content,
        publish: false
      }
      NewsDataService.create(news)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>

