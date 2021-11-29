<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'navbar',
  data(){
    return{

    }
  },
  beforeCreate() {
    // localStorage.setItem("key", "value");
    // localStorage.getItem("key");
    // localStorage.removeItem("key");
    // console.log('调用了beforeCreat钩子函数')
    var yasser_state = JSON.parse(localStorage.getItem("power_state"));
    if(yasser_state!=null){
      Object.keys(yasser_state).map(item => {
        this.$store.state[item] = yasser_state[item]
      });
    }
  },
  created() {
    // console.log('调用了created钩子函数')
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("power_state",JSON.stringify(this.$store.state))
    })
  },
  mounted(){
  },
  components: {

  },
  computed: {

  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
