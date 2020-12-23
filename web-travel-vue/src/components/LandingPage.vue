<template>
  <div id="app">
    <v-app id="inspire">
      <div class="container">
        <div class="carousel">
          <v-carousel hide-delimiters>
            <v-carousel-item
              :class="{ active: index == currentIndex }"
              v-for="(thisNews, index) in news.slice(0, 5)"
              :key="index"
              :src="thisNews.pictLink"
              reverse-transition="fade"
              transition="fade"
            >
            </v-carousel-item>
          </v-carousel>
        </div>

        <div class="content">
          <div class="text-center">
            <h1 style="margin-bottom: 30px">Destinasi Pilihan</h1>
          </div>
        </div>
        <v-layout row>
          <v-col xl="2" v-for="place in places" :key="place.name">
            <v-card class="mx-auto" max-width="200" style="margin-bottom: 30px">
              <v-img :src="place.pic" height="200px"></v-img>
              <v-card-title> {{ place.name }} </v-card-title>
            </v-card>
          </v-col>
        </v-layout>
        <div class="content text-center">
          <h1 style="margin-bottom: 30px">Artikel Baru</h1>
        </div>
        <v-layout row>
          <v-flex
            :class="{ active: index == currentIndex }"
            v-for="(thisNews, index) in news.slice(0, 3)"
            :key="index"
          >
            <v-card
              class="event-card mx-auto"
              max-width="300"
              style="margin-bottom: 30px"
            >
              <v-img :src="thisNews.pictLink" height="200px"></v-img>
              <a
                class="judul"
                @click="setActiveNews(thisNews, index)"
                :href="'/news/id/' + thisNews.id"
              >
                {{ thisNews.title }}
              </a>
              <v-divider class="mx-3"></v-divider>
              <v-card-actions>
                <v-col>
                  <v-icon medium>mdi-eye-outline</v-icon>
                  <v-text> {{ thisNews.views }}</v-text>
                </v-col>
                <v-col class="text-right">
                  <v-icon medium>mdi-share</v-icon>
                  <v-icon medium>mdi-heart-outline</v-icon>
                </v-col>
              </v-card-actions>
            </v-card>
            <v-spacer></v-spacer>
          </v-flex>
        </v-layout>
        <div class="button">
          <div class="text-center">
            <v-btn
              rounded
              color="primary"
              dark
              style="margin-bottom: 100px"
              :href="'/newsList/Terbaru'"
            >
              Artikel Lainnya
            </v-btn>
          </div>
        </div>
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
      category: "",
      places: [
        {
          name: "Yogyakarta",
          pic:
            "https://pmperizinan.jogjakota.go.id/upload/kontent/1dcb097adb548963693a34b5fdcc4a6b_Jogja.jpg",
        },
        {
          name: "Bali",
          pic:
            "https://pix10.agoda.net/geo/city/17193/1_17193_02.jpg?s=1920x822",
        },
        {
          name: "Bandung",
          pic:
            "https://exoticjavatrails.com/wp-content/uploads/2018/05/tangkuban-perahu-815x490.jpg",
        },
        {
          name: "Jakarta",
          pic:
            "https://lp-cms-production.imgix.net/image_browser/Jakarta_city_S.jpg",
        },
        {
          name: "Medan",
          pic:
            "https://i.pinimg.com/originals/3c/06/56/3c0656fc0cce88cbdcc7453f77aecfaa.jpg",
        },
        {
          name: "Padang",
          pic:
            "https://asset.kompas.com/crops/ZG4UWTLI1EhaBaRqq1zcWxNGhlA=/0x0:1000x667/750x500/data/photo/2020/08/28/5f48688bddfb2.jpg",
        },
        {
          name: "Raja Ampat",
          pic:
            "https://cdnaz.cekaja.com/media/2017/10/Raja-Ampat-Papua-CekAja-2048x1076.jpg",
        },
        {
          name: "Lombok",
          pic:
            "https://mytrip123.com/wp-content/uploads/2016/01/Wisata-lombok-yang-menarik.jpg",
        },
        {
          name: "Lombok",
          pic:
            "https://mytrip123.com/wp-content/uploads/2016/01/Wisata-lombok-yang-menarik.jpg",
        },
        {
          name: "Lombok",
          pic:
            "https://mytrip123.com/wp-content/uploads/2016/01/Wisata-lombok-yang-menarik.jpg",
        },
      ],
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

    setActiveNews(thisNews, index) {
      this.currentNews = thisNews;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveNews();
  },
};
</script>

<style>
.fade {
  transition: 0.3s ease-out;
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
}
.carousel {
  margin: auto;
  margin-top: 10px;
}
.judul {
  font-size: 1.2em;
  font-weight: 400;
  padding-left: 0.6em;
}
</style>