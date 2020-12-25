<template>
  <div id="app">
    <v-app id="inspire">
      <body>
        <div class="container">
          <v-card class="event-card">
            <div class="content">
              <h1>{{ currentNews.title }}</h1>
              <h5>Author: {{ currentNews.author }}</h5>
              <h6>Date: {{ currentNews.createdAt }}</h6>
              <img :src="currentNews.pictLink" />
              <br /><br /><br />
              <div class="ql-editor">
                <p v-html="currentNews.content"></p>
              </div>
            </div>
          </v-card>
        </div>
      </body>
    </v-app>
  </div>
</template>

<script>
import NewsDataService from "../../services/NewsDataService";
export default {
  name: "news",
  data() {
    return {
      currentNews: null,
    };
  },
  methods: {
    getNews(id) {
      NewsDataService.get(id)
        .then((response) => {
          this.currentNews = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getNews(this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  margin: 2em auto 4em;
}
.event-card {
  overflow: hidden;
  width: 85%;
  margin: 60px auto auto;
  border-radius: 0.3em;
}
.event-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  padding: 50px 30px;
}
.content h1 {
  font-size: 2em;
}
</style>
