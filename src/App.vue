<template>
<div id="app">
  <transition :name="transitionName">
    <keep-alive :include="include">
      <router-view class="router-view"></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
import routerConfig from '@/router/router'
const cacheRouter = routerConfig.filter(x => x.meta.cache).map(x => x.name)
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      include: cacheRouter.length > 0 ? cacheRouter.join(',') : ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-none'
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
  transition: all 200ms;
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
