<template>
  <div class="map">
    <div class="imgArea" v-if="show">
        <img src="../../assets/report/2-12-5.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReportForm26',
  data() {
    return {
      imgShow:2,
      show:false
    }
  },
  components: {   },
  created() {
      this.initLoading()
  },
  mounted(){

  },
  computed: {
  },
  watch: {},
  methods: {
    initLoading(){
        const loading = this.$loading({
            lock: true,
            text: '计算中，请耐心等待......',
            customClass: 'create-isLoading', 
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(()=>{
            loading.close();
            this.show=true;
        },2000)
    }
  }

}
</script>

<style lang="less" scoped>
.map{
    width: 100%;
    height: 100%;
    .imgArea{
        height: 100%;
    }
}
</style>