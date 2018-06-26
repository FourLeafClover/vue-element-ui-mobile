<template>
<div>
    <div id="nav">
        <router-link to="/">{{$t("App.Home")}}</router-link> |
        <router-link to="/about">{{$t("App.About")}}</router-link>
    </div>
    <div class="home">
        <img src="../assets/logo.png">
        <br/>关于网站
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

