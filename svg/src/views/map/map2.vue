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
    </div>
    
  </div>
</template>

<script>
// import * as echarts from 'echarts';
// import axios from 'axios';
import SvgPanZoom from 'vue-svg-pan-zoom';
export default {
  name: 'Map2',
  data() {
    return {
      imgShow:2,
    }
  },
  components: {  SvgPanZoom },
  created() {
  },
  mounted(){

  },
  computed: {},
  watch: {},
  methods: {
    handleCommand(command) {
      if(command==3){
        this.imgShow=Number(command);
        setTimeout(() => {
          this.imgShow=4;
        }, 12000);
      }else{
        this.imgShow=Number(command);
      }
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