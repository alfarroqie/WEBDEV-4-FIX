<template>
<v-app>
    <div class="wrapper">
    <div class="sidebar">
      <div class="logo">
        <img
          src=" https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png"
          width="150"
          height="75"
        />
      </div>
      <ul>
        <li>
          <a @click="onAddCategoriesClick"><i class="fas fa-chart-line"></i>Add Categories</a>
        </li>
        <li>
          <a @click="onPostArticleClick"
            ><i class="far fa-newspaper"></i>Post Artikel</a
          >
        </li>
        <li>
          <a @click="onListArticleClick"
            ><i class="far fa-file-alt"></i>Daftar Artikel</a
          >
        </li>
        <li>
          <a @click="onListCategoriesClick"
            ><i class="far fa-file-alt"></i>Daftar Kategori</a
          >
        </li>
        <li>
          <a @click="onLogOutClick"
            ><i class="far fa-file-alt"></i>Log Out</a
          >
        </li>
      </ul>
    </div>
    <div class="main_content">
      <div class="header">
        CMS
        <a class="header">admin</a>
        <i class="fas fa-user-circle"></i>
      </div>
      <!-- taruh template vue lain di sini -->
       <router-view></router-view>
    </div>
  </div>
</v-app>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {};
</script>

<script>
export default{
  name: 'AddCategories',
  methods: {
    onAddCategoriesClick(){
      if(this.$route.path !== '/addCategories')
        this.$router.push('/addCategories')
    },
    onPostArticleClick(){
      if(this.$route.path !== '/postArticle')
        this.$router.push('/postArticle')
    },
    onListArticleClick(){
      if(this.$route.path !== '/listArticle')
        this.$router.push('/listArticle')
    },
    onListCategoriesClick(){
      if(this.$route.path !== '/listCategories')
        this.$router.push('/listCategories')
    },
    onLogOutClick(){
      
    }
  },
  mounted(){
  }
}
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
  cursor: pointer;
  background-color: #594f8d;
}
.wrapper .sidebar ul li:hover a{
  color: #fff;
}
.wrapper .main_content{
  width: 100%;
  float : left;
  /* margin-left: 100px; */
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
  margin-right: 5px;
  font-size: 10px;
  border: none;
  cursor: pointer;
}
*/
.col-25 {
  float: right;
  width: 5%;
  margin-top: 6px;
}
.col-75 {
  float: right;
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