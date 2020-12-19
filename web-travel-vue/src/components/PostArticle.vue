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
        <div class="form-group">
          <div class="row">
            <label class="control-label col-sm-2">Kategori</label>
            <div class="col-sm-10">
              <v-select
                  v-model="idCategoryNews"
                  :items="category"
                  placeholder="Pilih Kategori"
                  outlined
                ></v-select>
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
import CategoryService from "../services/CategoryDataService";
export default {
  components: {
    VueEditor
  },

  data() {
    return {
      author: "",
      title: "",
      content: "",
      idCategoryNews: "",
      category: [],
    };
  },
  methods: {
    retrieveCategory() {
      CategoryService.getAll()
        .then((response) => {
          this.category = response.data.map(this.mapNewsCategory);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addNews: function() {
      const news = {
        author: this.author,
        title: this.title,
        content: this.content,
        publish: false
      }
      // const newsCategory ={
      //   newsId : "",
      //   categoryId: this.categoryNews.id
      // }
      NewsDataService.create(news)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      // NewsDataService.addNewsCategory(newsCategory)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((e) =>{
      //     console.log(e);
      //   }); 
    },
    mapNewsCategory(category) {
      return {
        text: category.name,
        value: category.id
      };
    },
  },
  mounted() {
    this.retrieveCategory();
  }
};
</script>

