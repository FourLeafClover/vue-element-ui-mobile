<template>
  <div>
    <div id="lang">
      <span class="tag" @click="lang('cn')">中文</span>
      <span class="tag" @click="lang('en')">English</span>
    </div>
    <div id="nav">
      <router-link to="/">{{$t('App.Home')}}</router-link> |
      <router-link to="/about">{{$t('App.About')}}</router-link>
    </div>
  <div class="home">
    <img src="../assets/logo.png">
    <br/>
    Hello Vue!!!
  </div>
  </div>
</template>

<script>
import { setItem } from "@/utils/$storage";
export default {
  name: "home",
  created() {},
  methods: {
    lang(locale) {
      setItem("vue.locale", locale);
      this.$i18n.locale = locale;
    }
  }
};
</script>
<style lang="scss" scoped>
#lang {
  margin-bottom: 5px;
}
#lang {
  .tag {
    margin-right: 5px;
    border: 1px solid gray;
    padding: 5px;
  }
}
</style>


