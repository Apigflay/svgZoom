<template>
  <div class="map">
    <div class="mapArea" id="main">
      <!-- <div class="tipsArea">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            地图设置<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">显示网格</el-dropdown-item>
            <el-dropdown-item command="2">显示站点</el-dropdown-item>
            <el-dropdown-item command="3">显示路线</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->
      <template v-if="imgShow==1">
        <SvgPanZoom 
            style="width: 100%; height: 100%; "
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true">
            <svg-icon  style="width: 100%; height: 100%;" icon-class="bg11" />
        </SvgPanZoom>
      </template>
      <template v-if="imgShow==2">
        <SvgPanZoom 
            style="width: 100%; height: 100%; "
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true">
            <svg-icon style="width: 100%; height: 100%;" icon-class="bg55" />
        </SvgPanZoom>
      </template>
      <div :key="new Date().getTime()" v-if="imgShow==3" class="bg" style="width: 100%; height: 100%; "></div>
      <template v-if="imgShow==4">
        <SvgPanZoom 
            style="width: 100%; height: 100%; "
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true">
            <svg-icon style="width: 100%; height: 100%;" icon-class="bg44" />
        </SvgPanZoom>
      </template>
    </div>
    
  </div>
</template>

<script>
// import * as echarts from 'echarts';
// import axios from 'axios';
import SvgPanZoom from 'vue-svg-pan-zoom';
export default {
  name: 'Map',
  data() {
    return {
      imgShow:3,
    }
  },
  components: {  SvgPanZoom },
  created() {
  },
  mounted(){
    // this.initEcharts()
    this.initGif()
  },
  computed: {},
  watch: {},
  methods: {
    initEcharts(){
        // var chartDom = document.getElementById('main');
        // var myChart = echarts.init(chartDom);
        // var option;
        // $.get('http://yasser.top:801/bg22.svg', function (svg) {
        //     echarts.registerMap('aaa', { svg: svg });
        //     option = {
        //         tooltip: {
        //         },
        //         geo: {
        //             map: 'aaa',
        //             roam: true,
        //         },
        //         series: [
        //         ]
        //     };
        //     myChart.setOption(option);
        // });
        // option && myChart.setOption(option);
    },
    handleCommand(command) {
      if(command==3){
        this.imgShow=Number(command);
        var timer = setTimeout(() => {
          this.imgShow=4;
        }, 8000);
      }else{
        this.imgShow=Number(command);
      }
    },
    initGif(){
        setTimeout(() => {
          this.imgShow=4;
          this.$store.dispatch('SET_allProcessId',8)
        }, 11000);
    }
  }

}
</script>

<style lang="less" scoped>
/deep/ #svg-pan-zoom-controls{
  display: none;
}
.map{
  width: 100%;
  height: 100%;
  .mapArea{
    width: 100%;
    height: 100%;
    position: relative;
    .bg{
      background-image: url('../../assets/map/bg3.gif');
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .tipsArea{
      position: absolute;
      background:#fff;
    }
    // color: red;
    // background-image: url('../../assets/map/bg3.gif');
    // background-position: center center;
    // background-size: 100%;
  }
  
}
</style>