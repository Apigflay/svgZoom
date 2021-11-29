<template>
  <div class="enginManageWrap">
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
                <svg-icon style="width: 100%; height: 100%;" icon-class="bg22" />
            </SvgPanZoom>
        </template>
        <div v-if="imgShow==3" class="bg" style="width: 100%; height: 100%; "></div>
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
    <div class="enginManage">
      <div class="main">
        <p class="title">站所筛选</p>
        <div class="projectArea">
          <div class="treeArea">
            <el-tree
                style="width:260px"
                :highlight-current="true"
                ref="tree"
                :data="data1"
                :props="defaultProps1"
                :default-checked-keys="defaultArray1"
                node-key="deviceId"
                show-checkbox
                @check="handleCheckChange">
            </el-tree>
          </div>
          <div class="treeArea">
            <el-tree
                style="width:260px"
                :highlight-current="true"
                ref="tree"
                :data="data2"
                :props="defaultProps2"
                :default-checked-keys="defaultArray2"
                node-key="deviceId"
                show-checkbox
                @check="handleCheckChange">
            </el-tree>
          </div>
        </div>
        <div class="btnArea">
              <button class="btn" @click="goPages">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgPanZoom from 'vue-svg-pan-zoom';
export default {
  name: 'EnginManage',
  data() {
    return {
        data1: [{
            deviceName: '变电站',
            deviceId:1,
            subDeviceList: [{
                deviceName: '新舟变',
                deviceId:11,
                subDeviceList: []
            },{
                deviceName: '崔陈变',
                deviceId:12,
                subDeviceList: []
            },{
                deviceName: '海星变',
                deviceId:13,
                subDeviceList: []
            },{
                deviceName: '滨海变',
                deviceId:14,
                subDeviceList: []
            },{
                deviceName: '越瓷变',
                deviceId:15,
                subDeviceList: []
            },{
                deviceName: '盘棋变',
                deviceId:16,
                subDeviceList: []
            },]
        }],
        defaultProps1: {
            children: 'subDeviceList',
            label: 'deviceName'
        },
        data2: [{
            deviceName: '网格',
            deviceId:1,
            subDeviceList: [{
                deviceName: 'SBNB_SW_03A',
                deviceId:11,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:111,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:112,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:113,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:114,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:115,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:116,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:117,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:118,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:119,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1191,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_SW_04A',
                deviceId:12,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:121,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:122,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:123,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:124,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:125,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:126,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:127,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:128,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:129,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1291,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_SW_05A',
                deviceId:13,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:131,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:132,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:133,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:134,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:135,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:136,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:137,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:138,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:139,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1391,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_ZB_01A',
                deviceId:14,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:141,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:142,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:143,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:144,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:145,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:146,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:147,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:148,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:149,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1491,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_ZB_02A',
                deviceId:15,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:151,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:152,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:153,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:154,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:155,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:156,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:157,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:158,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:159,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1591,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_ZB_03A',
                deviceId:16,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:161,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:162,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:163,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:164,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:165,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:166,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:167,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:168,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:169,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1691,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_ZB_04A',
                deviceId:17,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:171,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:172,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:173,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:174,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:175,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:176,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:177,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:178,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:179,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1791,
                subDeviceList:[]
                }]
            },{
                deviceName: 'SBNB_ZB_05A',
                deviceId:18,
                subDeviceList: [{
                deviceName: 'YD-U12-9',
                deviceId:181,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-70',
                deviceId:182,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-71',
                deviceId:183,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-72',
                deviceId:184,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-73',
                deviceId:185,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-74',
                deviceId:186,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-75',
                deviceId:187,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-76',
                deviceId:188,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-77',
                deviceId:189,
                subDeviceList:[]
                },{
                deviceName: 'YD-R2-121',
                deviceId:1891,
                subDeviceList:[]
                }]
            }]
        }],
        defaultProps2: {
            children: 'subDeviceList',
            label: 'deviceName'
        },
        adressName:'',
        picName:'',
        fileName:'',
        isOpen:true,
        imgShow:2,
        defaultArray1:[11,12,13,14,15,16],
        defaultArray2:[
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            1191,

            121,
            122,
            123,
            124,
            125,
            126,
            127,
            128,
            129,
            1291,

            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            1391,

            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            1491,

            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            1591,

            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            1691,

            171,
            172,
            173,
            174,
            175,
            176,
            177,
            178,
            179,
            1791,

            181,
            182,
            183,
            184,
            185,
            186,
            187,
            188,
            189,
            1891,

        ]
    }
  },
  components: {  SvgPanZoom },
  computed: {},
  watch: {},
  methods: {
    handleCheckChange(data) {//, checked, indeterminate
      console.log(data)
      console.log(this.$refs.tree.getCheckedKeys(true))
      if(this.$refs.tree.getCheckedKeys(true).length>0){
        this.isOpen=false;
        this.adressName='宁波';
        this.picName=data.deviceName;
        this.fileName=data.deviceName;
      }else{
        this.isOpen=true;
        this.adressName='';
        this.picName='';
        this.fileName='';
      }
    },
    goPages(){
        const loading = this.$loading({
            lock: true,
            text: '计算中，请耐心等待......',
            customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(()=>{
            loading.close();
            this.$store.dispatch('SET_allProcessId',6)
            this.$router.push('/example/psline')
        },2000)
    }
  }

}
</script>

<style lang="less" scoped>

// /deep/  .el-tree-node{
//       .is-leaf + .el-checkbox .el-checkbox__inner{
//           display: inline-block;
//       }
//       .el-checkbox .el-checkbox__inner{
//           display: none;
//       }
// }
.app-main{
  flex: 1;
}
.enginManageWrap{
    width: 100%;
    height: 100%;
    position: relative;
    .mapArea{
        width: 100%;
        height: 100%;
        position: absolute;
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
    }
}
.enginManage{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  .main{
    width: 538px;
    height: 399px;
    background: #F3F3F3;
    border: 1px solid #A0A0A0;
    .title{
      line-height: 30px;
      font-size: 30px;
      font-weight: 600;
      color: #000000;
      text-align: center;
      padding:3px 0px 11px 0px;
    }
    .projectArea{
      height: 294px;
      padding: 0px 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .treeArea{
        width: 225px;
        height: 292px;
        background: #FFFFFF;
        border: 1px solid #000000;
        overflow: scroll;
      }
    }
    .btnArea{
        margin-top: 22px;
        height: 20px;
        display: flex;
        flex-direction: row-reverse;
        .btn{
            width: 70px;
            margin-right: 30px;
        }
    }
  }
}
</style>