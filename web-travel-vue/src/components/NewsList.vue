<template>
  <div id="app">
    <v-app id="inspire">
      <div class="container">
        <div class="search col-md-12">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search by title"
              v-model="title"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="searchTitle"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="tombol">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchDaerah"
          >
            <!-- Yogyakarta -->
          </button>
        </div>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex style="width: 1000px">
              <li
                :class="{ active: index == currentIndex }"
                v-for="(thisNews, index) in news"
                :key="index"
              >
                <v-card class="event-card">
                  <v-layout row>
                    <img :src="thisNews.pictLink" />
                    <v-flex>
                      <div>
                        <router-link :to="'/news/id/' + thisNews.id">
                          {{ thisNews.title }}
                        </router-link>
                        <h3 class="author">{{ thisNews.author }}</h3>
                        <h4 class="published">{{ thisNews.published }}</h4>
                        
                      </div>
                      <v-divider class="mx-4"></v-divider>
                      <v-card-actions>
                        <v-col>
                          <v-icon medium>mdi-eye-outline</v-icon>
                        </v-col>
                        <v-col class="text-right">
                          <v-icon medium>mdi-share</v-icon>
                          <v-icon medium>mdi-heart-outline</v-icon>
                        </v-col>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
              </li>
              <!-- <router-link :to="'/news/id/' + thisNews.id"> 
                <h4 class="card-title">
                  {{ thisNews.title }}
                </h4> 
              </router-link> -->
              <!-- <div v-if="currentNews">
                <h4>News</h4>
                <div>
                  <label><strong>Title:</strong></label>
                  {{ currentNews.title }}
                </div>
                <div>
                  <label><strong>Author:</strong></label>
                  {{ currentNews.author }}
                </div>
                <router-link :to="'/detail'">Edit</router-link>
              </div> -->
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-app>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-list",
  data() {
    return {
      news: [],
      currentNews: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveNews() {
      NewsDataService.getAll()
        .then((response) => {
          this.news = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveNews();
      this.currentNews = null;
      this.currentIndex = -1;
    },

    setActiveNews(thisNews, index) {
      this.currentNews = thisNews;
      this.currentIndex = index;
    },

    removeAllNews() {
      NewsDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      if (this.title != "") {
        NewsDataService.findByTitle(this.title)
          .then((response) => {
            this.news = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        NewsDataService.getAll()
          .then((response) => {
            this.news = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    searchDaerah() {
      NewsDataService.findByCategory("Yogyakarta")
        .then((response) => {
          this.news = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveNews();
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
  width: 65%;
  margin: auto;
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
/* h1 {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
} */
.btn {
  height: 38px;
  text-align: center;
}

.search {
  margin: 120px auto auto;
  width: 65%;
}
</style>