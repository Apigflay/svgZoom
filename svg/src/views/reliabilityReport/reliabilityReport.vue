<template>
  <div class="enginManage">
    <div class="main">
        <div class="report">
            
        </div>
        <div class="treeArea">
            <div class="title">供电单元选择</div>
            <div class="tree">
                <el-tree
                    style="width:260px"
                    :highlight-current="true"
                    ref="tree"
                    :data="data1"
                    :props="defaultProps1"
                    node-key="deviceId"
                    show-checkbox
                    @check="handleCheckChange">
                </el-tree>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnginManage',
  data() {
    return {
        data1: [{
            deviceName: '网格管理',
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
            }]
        }],
        defaultProps1: {
            children: 'subDeviceList',
            label: 'deviceName'
        },
    

        value:1,
        adressName:'',
        picName:'',
        fileName:'',
        isOpen:true,

        checked:true,
    }
  },
  components: {
  },
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
      
      // return
      // console.log(this.$refs.tree.getCheckedKeys(true))

    },
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
.enginManage{
  width: 100%;
  height: 100%; 
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .report{
        flex: 1;
        height: 100%;
    }
    .treeArea{
        width: 337px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title{
            width: 336px;
            height: 43px;
            background: #79ADD5;
            font-size: 24px;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 43px;
            text-align: center;
        }
        .tree{
            flex: 1;
            width: 337px;
            background: #FFFFFF;
            border: 1px solid #000000;
            margin: auto;
            overflow: scroll;
        }
    }
  }
}
</style>