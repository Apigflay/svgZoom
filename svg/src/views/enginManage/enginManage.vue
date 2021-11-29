<template>
  <div class="enginManage">
    <div class="main">
      <p class="title">工程管理</p>
      <div class="projectArea">
        <div class="treeArea">
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
        <div class="introArea">
          <div class="form">
            <div class="per">
              <span>地区名称：</span>
              <input v-model="adressName" placeholder="" size="mini" disabled style="width:120px;height:20px"/>
            </div>
            <div class="per">
              <span>图形名称：</span>
              <input v-model="picName" placeholder="" size="mini" disabled style="width:120px;height:20px"/>
            </div>
            <div class="per">
              <span>文件名：</span> 
              <input v-model="fileName" placeholder="" size="mini" disabled style="width:120px;height:20px"/>
            </div>
            <div class="btn">
              <button disabled>增加</button>
              <button disabled>修改</button>
              <button disabled>删除</button>
              <button disabled>查看文件夹</button>
            </div>
          </div>
          <div class="pageBtn">
            <button disabled>CIM导入</button>
            <button :disabled="isOpen" @click="gopages">打开文件</button>
            <button disabled>退出</button>
          </div>
          
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
        deviceName: '工程管理',
        deviceId:1,
        subDeviceList: [{
            deviceName: '宁波',
            deviceId:11,
            subDeviceList: [{
              deviceName: '杭湾2个网络:目标网架',
              deviceId:111,
              subDeviceList:[{
                deviceName: '杭湾2个网络:目标网架',
                deviceId:1111,
                disabled:false
              }]
            },{
              deviceName: '杭湾现状网',
              deviceId:112,
              subDeviceList:[{
                deviceName: '杭湾现状网',
                deviceId:1121,
                disabled:false
              }],
            }]
        }]
        }],
      defaultProps1: {
          children: 'subDeviceList',
          label: 'deviceName'
      },
      adressName:'',
      picName:'',
      fileName:'',
      isOpen:true,
      disabled1:false,
      disabled2:false
    }
  },
  components: {
  },
  computed: {},
  watch: {},
  methods: {
    handleCheckChange(data) {//, checked, indeterminate
      if(this.$refs.tree.getCheckedKeys(true).length>0){
        if(data.deviceId==1111){
          this.data1[0].subDeviceList[0].subDeviceList[1].subDeviceList[0].disabled=true;
        }else if(data.deviceId==1121){
          this.data1[0].subDeviceList[0].subDeviceList[0].subDeviceList[0].disabled=true;
        }
        
        
        this.isOpen=false;
        this.adressName='宁波';
        this.picName=data.deviceName;
        this.fileName=data.deviceName;
      }else{
        this.isOpen=true;
        this.adressName='';
        this.picName='';
        this.fileName='';
        this.data1[0].subDeviceList[0].subDeviceList[0].subDeviceList[0].disabled=false;
        this.data1[0].subDeviceList[0].subDeviceList[1].subDeviceList[0].disabled=false;
      }
      // return
      // console.log(this.$refs.tree.getCheckedKeys(true))
    },
    gopages:function(){
      if(this.isOpen==false){
        if(this.$refs.tree.getCheckedKeys(true)[0]==1111){
          const loading = this.$loading({
              lock: true,
              text: '计算中，请耐心等待......',
              customClass: 'create-isLoading', 
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(()=>{
              loading.close();
              this.$store.dispatch('SET_allProcessId',2)
              this.$router.push('/example/map')
          },2000)
        }else if(this.$refs.tree.getCheckedKeys(true)[0]==1121){
          const loading = this.$loading({
              lock: true,
              text: '计算中，请耐心等待......',
              customClass: 'create-isLoading', 
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(()=>{
              loading.close();
              this.$store.dispatch('SET_allProcessId',6)
              this.$router.push('/example/map2')
          },2000)
        }
        
        
      }
    }
  }

}
</script>

<style lang="less" scoped>

/deep/  .el-tree-node{
      .is-leaf + .el-checkbox .el-checkbox__inner{
          display: inline-block;
      }
      .el-checkbox .el-checkbox__inner{
          display: none;
      }
}
.app-main{
  flex: 1;
}
.enginManage{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .main{
    width: 538px;
    height: 355px;
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
      .introArea{
        width: 225px;
        height: 292px;
        .form{
          width: 210px;
          height: 228px;
          border: 1px solid #000000;
          border-radius: 5px;
          padding:20px 0 0 15px;
          .per{
            display: flex;
            font-size: 12px;
            align-items: center;
            margin-bottom: 10px;
            span{
              width:60px;
            }
          }
          .btn{
            padding-top: 20px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            button{
              width: 80px;
              height: 21px;
              margin: 0 10px;
              // color: #000;
            }
          }
        }
        .pageBtn{
          padding-top: 15px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          button{
            padding: 0 5px;
            margin: 0 7px;
          }
        }
      }
    }
  }
}
</style>