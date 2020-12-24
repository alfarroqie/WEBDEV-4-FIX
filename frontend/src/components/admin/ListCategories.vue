<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>List Kategori</v-card-title>

        <v-data-table
          :headers="headers"
          :items="list_kategori"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editCategory(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteCategory(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="category.length > 0">
          <v-btn small color="error" @click="removeAllCategory">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
<<<<<<< HEAD:web-travel-vue/src/components/ListCategories.vue
import CategoryDataService from "../services/CategoryDataService";
=======
import CategoryService from "../../services/CategoryDataService";
>>>>>>> 2935e4a02848fc25e4b1a3a81bee158a5e54c3c3:frontend/src/components/admin/ListCategories.vue
export default {
  name: "kategori-list",
  data() {
    return {
      list_kategori: [],
      title: "",
      headers: [
<<<<<<< HEAD:web-travel-vue/src/components/ListCategories.vue
        { text: "Name", align: "start", sortable: false, value: "name" },
        { text: "Status", value: "status", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
=======
        { text: "Id", align: "start", sortable: false, value: "id" },
        { text: "Kategori", sortable: false, value: "name" },
        { text: "Jenis", value: "isLocation", sortable: false },
        { text: "Delete", value: "actions", sortable: false },
>>>>>>> 2935e4a02848fc25e4b1a3a81bee158a5e54c3c3:frontend/src/components/admin/ListCategories.vue
      ],
    };
  },
  methods: {
    retrieveCategory() {
      CategoryDataService.getAll()
        .then((response) => {
          this.category = response.data.map(this.getDisplayCategory);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCategory();
    },

    // removeAllTutorials() {
    //   CategoryDataService.deleteAll()
    //     .then((response) => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },

    searchTitle() {
      CategoryDataService.findByTitle(this.title)
        .then((response) => {
          this.category = response.data.map(this.getDisplayCategory);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editCategory(id) {
      this.$router.push({ name: "Category-details", params: { id: id } });
    },

    deleteCategory(id) {
      CategoryDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // getDisplayCategory(category) {
    //   return {
    //     // id: tutorial.id,
    //     // title: tutorial.title.length > 30 ? tutorial.title.substr(0, 30) + "..." : tutorial.title,
    //     // description: tutorial.description.length > 30 ? tutorial.description.substr(0, 30) + "..." : tutorial.description,
    //     // status: tutorial.published ? "Published" : "Pending",
    //   };
    // },
  },
  mounted() {
    this.retrieveCategory();
  },
};
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
   background-color: #fff;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #abcabd;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}

.wrapper .sidebar ul li a{
  color: #000000;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #594f8d;
}

.wrapper .sidebar ul li:hover a{
  color: #fff;
}

.wrapper .main_content{
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header{
	font-size: 40px;
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}
.wrapper .main_content .header a{
	float: right;
	font-size : 20px;
}

.wrapper .main_content .header i{
	float: right;
}
.wrapper .main_content .header .search{
	padding-left : -70px;
	padding-top: 30px;
}
.wrapper .main_content .header .search .search-box{
	float:right;
	width: 20%;

}
.wrapper .main_content .info{
  margin: 20px;
  color: #000000;
  line-height: 25px;
}

/*
.wrapper .main_content .info{
    border:"1";
    cellpadding:"5"
}*/

.wrapper .main_content .info div{
  margin-bottom: 20px;
  font-size: 20px;
}
/*
.wrapper .main_content .info .judul-form{
  margin-right: 16px;
  font-size: 10px;
  border: none;
  cursor: pointer;
}
*/
.col-25 {
  float: left;
  width: 10%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 90%;
  margin-top: 6px;
}
.wrapper .main_content .info .judul-form .form-control{
  font-size: 17px;
}
.table1 {
    color: #232323;
    border-collapse: collapse;
}

.table1, th, td {
    border: 1px solid #999;
    padding: 8px 20px;
}
.btn-table {
	float: right;

}
@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}
</style>
