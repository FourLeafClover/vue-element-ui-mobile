<template>
<div>
    <div id="nav">
        <router-link to="/">{{$t("App.Back")}}</router-link>
    </div>
    <div class="home">
        <img src="../assets/logo.png">
        <br/>一个简单的Vue全家桶
    </div>
</div>
</template>
<script>
export default {
  name: "about",
  created() {
    console.log("about page created!");
  }
};
</script>

