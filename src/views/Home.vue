<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  <div class="home">
    <img src="../assets/logo.png">
    <br/>
    Hello Vue!!!
  </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
