<template>
<div id="app">
  <transition :name="transitionName">
    <keep-alive :exclude="exclude">
      <router-view class="router-view"></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      exclude: ''
    }
  },
  watch: {
    $route (to, from) {
      if (!to.meta.cache) {
        this.$set(this.$data, 'exclude', to.name)
      }
      if (to.meta.index > from.meta.index) {
        this.$set(this.$data, 'transitionName', 'slide-left')
      } else if (to.meta.index < from.meta.index) {
        this.$set(this.$data, 'transitionName', 'slide-right')
      } else {
        this.$set(this.$data, 'transitionName', 'slide-none')
      }
    }
  }
}
</script>

<style lang="scss">

.router-view {
  width: 100%;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-none-leave-active {
  opacity: 0;
  display: none;
}

.slide-none-enter {
  display: inline;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
