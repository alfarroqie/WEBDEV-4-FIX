<template>
<div id="app">
<div class="container">
  <h2>Post Artikel</h2>
  <div class="row">
    <div class="col-sm">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2">Penulis</label>
          <div class="col-sm-10">
            <input class="form-control" id="author" placeholder="Ketikkan penulis artikel" name="author">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Judul</label>
          <div class="col-sm-10">
            <input class="form-control" id="title" placeholder="Ketikkan judul artikel" name="title">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Konten</label>
          <div class="col-sm-10">
            <textarea class="form-control" rows=10 id="content"></textarea>
          </div>
        </div>
      </form>
    </div>
      <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
  </div>
</div>
</div>
</template>


<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    // name: "app",
    //       data() {
    //           return {
    //               editor: ClassicEditor,
    //               editorData: '<p>Rich-text editor content.</p>',
    //               editorConfig: {
    //                   // The configuration of the rich-text editor.
    //               }
    //           };
    //       }
}
</script>
<!-- <script src="../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
<script src="../node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js"></script>
-->
