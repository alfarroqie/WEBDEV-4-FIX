<template>
  <body>
    <div class="event-card">
      <h1>{{ currentNews.title }}</h1>
      <h3>{{ currentNews.author }}</h3>
      <h6>Published: {{ currentNews.publish }}</h6>
      <p>Content: {{ currentNews.content }}</p>
    </div>
  </body>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news",
  data() {
    return {
      currentNews: null,
      message: "",
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

    updateNews() {
      NewsDataService.update(this.currentNews.id, this.currentNews)
        .then((response) => {
          console.log(response.data);
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteNews() {
      NewsDataService.delete(this.currentNews.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "news" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getNews(this.$route.params.id);
  },
};
</script>

<style scoped>
.container li {
  list-style: none;
  margin: 2em 0;
}

.event-card {
  overflow: hidden;
  width: 100%;
  margin: 120px auto auto;
  border-radius: 0.3em;
}

.event-card img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.event-card .judul {
  font-size: 2em;
  font-weight: 400;
  padding-top: 0.2em;
  padding-left: 0.5em;
}
.event-card .author {
  font-size: 1.2em;
  font-weight: 400;
  padding-left: 1em;
  padding-bottom: 1em;
}
.h1 {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.btn {
  height: 38px;
  text-align: center;
}

.search {
  margin: 120px auto auto;
  width: 65%;
}
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
