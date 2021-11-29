<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <sidebar class="sidebar-container" /> -->
    <div class="main-wrapper">
      <navbar class="navbar-container" />
      <app-main class="main-container" />
      <bottombar class="bottombar-container"/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Bottombar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    // Sidebar,
    AppMain,
    Bottombar
  },

  computed: {
    sidebar() {
      return 1;
    //   this.$store.state.app.sidebar
    },
    device() {
      return 2
    //   this.$store.state.app.device
    },
    fixedHeader() {
      return 3
    //   this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        // hideSidebar: !this.sidebar.opened,
        // openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === 'mobile'
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.app-wrapper{
  width: 100%;
  height: 100%;
  // display: flex;
  // .sidebar-container{
  //   height: 100%;
  //   width: 0px;
  // }
  .main-wrapper{
    width: 100%;
    height: 100%;
    // flex: 1;
    display: flex;
    flex-direction: column;
    
  }
}
</style>
