<template>
  <div class="navbar">
    <i @click="goPages(0)" class="fiexTip el-icon-caret-bottom"></i>
    <div class="tabArea" :class="processId==6?'acTabArea':''"> 
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="数据中心" disabled name="first">1</el-tab-pane>
          <el-tab-pane label="诊断评估" :disabled="processId==8||processId==6?false:true" name="second">
            <div class="diagnosisArea">
              <div class="perList">
                <p class="listTitle">基本信息</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-collection"></i>
                    <!-- <span>基本信息汇总</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        基本信息汇总<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1-1">现状配电网基本信息表</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        装备水平<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1-2-1">线路供电半径报表</el-dropdown-item>
                        <el-dropdown-item command="1-2-2">线路主线截面报表</el-dropdown-item>
                        <el-dropdown-item command="1-2-3">线路挂接容量报表</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <!-- <span>网架结构</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        网架结构<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1-3-1">线路接线方式报表</el-dropdown-item>
                        <el-dropdown-item command="1-3-2">网架结构统计表</el-dropdown-item>
                        <el-dropdown-item command="1-3-3">线路联络合理性报表</el-dropdown-item>
                        <el-dropdown-item command="1-3-4">架空线分段合理性报表</el-dropdown-item>
                        <el-dropdown-item command="1-3-5">架空线大分支报表</el-dropdown-item>
                        <el-dropdown-item command="1-3-6">岛分析报表</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-bangzhu"></i>
                    <!-- <span>运行水平</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        运行水平<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1-4-1">线路负载率报表</el-dropdown-item>
                        <el-dropdown-item command="1-4-2">线路负载率明细表</el-dropdown-item>
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            馈线N-1<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1-4-3-1">馈线N-1报表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                        <div style="padding:3px 0"></div>
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            变电站N-1<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1-4-4-1">全停下转供能力</el-dropdown-item>
                            <el-dropdown-item command="1-4-4-2">各变电站全停全转明细表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
              <div class="perList">
                <p class="listTitle">规划计算分析</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-no-smoking"></i>
                    <el-dropdown trigger="click" @command="handleCommandEva" >
                      <span class="el-dropdown-link">
                        潮流计算<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>潮流计算</el-dropdown-item>
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            潮流报表<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="2-12-1">母线电压报表</el-dropdown-item>
                            <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                              <span class="el-dropdown-link">
                                线路报表<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="2-12-2-1">损耗报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-2-2">电流报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-2-3">功率报表</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                            <div style="padding:3px 0"></div>
                            <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                              <span class="el-dropdown-link">
                                变压器报表<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="2-12-3-1">损耗报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-3-2">电流报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-3-3">电荷报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-3-4">电压越界报表</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                            <div style="padding:3px 0"></div>
                            <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                              <span class="el-dropdown-link">
                                并联设备报表<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="2-12-4-1">损耗报表</el-dropdown-item>
                                <el-dropdown-item command="2-12-4-2">电流报表</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                            <el-dropdown-item command="2-12-5">网损报表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        短路计算<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="2-2-1">短路计算</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        N-1<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            馈线N-1校验<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="2-3-1-1">馈线N-1报表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                        <div style="padding:3px 0"></div>
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            母线N-1校验<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="2-3-2-1">母线N-1报表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                        <div style="padding:3px 0"></div>
                        <el-dropdown trigger="click" @command="handleCommandEva" style="margin-left:20px;cursor:pointer;">
                          <span class="el-dropdown-link">
                            变电站N-校验<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="2-3-3-1">变电站N-1报表</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        可靠性<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="2-4-1">可靠性评估</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        无功<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>无功规则</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
              <div class="perList">
                <p class="listTitle">供电质量分析</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <!-- <span>理论线损</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        理论线损<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="3-1-1">线损计算</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <!-- <span>电压分析</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        电压分析<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="3-2-1">电压越界分析</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
              <div class="perList">
                <p class="listTitle">供电安全分析</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-film"></i>
                    <!-- <span>开关评估</span> -->
                    <el-dropdown trigger="click" @command="handleCommandEva">
                      <span class="el-dropdown-link">
                        开关评估<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="4-1-1">开断能力评估</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-question"></i>
                    <span>故障隔离</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="负荷预测" :disabled="processId>1?false:true" name="third">
            <div class="diagnosisArea">
              <div class="perList perList1">
                <p class="listTitle">空间负荷预测</p>
                <div class="list">
                  <div class="iconArea" @click="goPages(2)">
                    <i class="el-icon-collection"></i>
                    <span>负荷预测报表</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="辅助规划" :disabled="processId>1?false:true" name="fourth">
            <div class="diagnosisArea">
              <div class="perList perList2">
                <p class="listTitle">电网辅助规划</p>
                <div class="list">
                  <div class="iconArea" @click="goPages(3)">
                    <i class="el-icon-collection"></i>
                    <span>开关规划报表</span>
                  </div>
                  <div class="iconArea" @click="goPages(4)">
                    <i class="el-icon-s-order"></i>
                    <span>无功规划报表</span>
                  </div>
                  <div class="iconArea" @click="goPages(5)">
                    <i class="el-icon-s-order"></i>
                    <span>网络重构报表</span>
                  </div>
                </div>
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="智能规划" :disabled="processId==2||processId==3||processId==4||processId==5||processId==7?false:true" name="five">
            <!-- <div class="intelligenceArea"></div> -->
            <div class="diagnosisArea">
              <div class="perList">
                <p class="listTitle">自动成图</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-collection"></i>
                    <span>单线图</span>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-notebook-2"></i>
                    <span>系统图</span>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-office-building"></i>
                    <span>电网显示过滤</span>
                  </div>
                </div>
              </div>
              <div class="perList">
                <p class="listTitle">电源点规划</p>
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <span>变电站布点</span>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <span>联络片</span>
                    <!-- <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        联络片<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>布线1</el-dropdown-item>
                        <el-dropdown-item disabled>布线2</el-dropdown-item>
                        <el-dropdown-item disabled>布线3</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown> -->
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <span>统筹区划分</span>
                    <!-- <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        统筹区划分<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>布线1</el-dropdown-item>
                        <el-dropdown-item disabled>布线2</el-dropdown-item>
                        <el-dropdown-item disabled>布线3</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown> -->
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <span>接线模式选择</span>
                    <!-- <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        接线模式选择<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>存储</el-dropdown-item>
                        <el-dropdown-item disabled>编辑</el-dropdown-item>
                        <el-dropdown-item disabled>读取</el-dropdown-item>
                        <el-dropdown-item disabled>显示</el-dropdown-item>
                        <el-dropdown-item disabled>报表</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown> -->
                  </div>
                  <div class="iconArea">
                    <!-- 供电范围划分 -->
                    <i class="el-icon-s-order" :class="processId==2?'bcText':'grayText'"></i>
                    <el-dropdown trigger="click" @command="handleCommand">
                      <span class="el-dropdown-link" :class="processId==2?'':'grayText'">
                        供需匹配性分析<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="7" :disabled="processId==2?false:true">供电单元划分</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order" :class="processId==3?'bcText':'grayText'"></i>
                    <el-dropdown trigger="click" @command="handleCommand">
                      <span class="el-dropdown-link"  :class="processId==3?'':'grayText'">
                        环网柜<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="6" :disabled="processId==3?false:true">环网柜布点</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <el-dropdown trigger="click" @command="handleCommand">
                      <span class="el-dropdown-link"  :class="processId==99?'':'grayText'">
                        变电站供电范围<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="4" disabled>供电范围分析</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="iconArea">
                    <i class="el-icon-s-order"></i>
                    <span>环网站供电范围</span>
                    <!-- <el-dropdown trigger="click" @command="handleCommand">
                      <span class="el-dropdown-link"  :class="processId==5?'':'grayText'">
                        环网站供电范围<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="5" >供电范围分析</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown> -->
                  </div>
                </div>
              </div>
              <div class="perList">
                <p class="listTitle" @click="goPages(1)" :class="processId==7?'bcText':'grayText'">供电单元布线</p>
              </div>
              <div class="perList">
                <div class="list">
                  <div class="iconArea">
                    <i class="el-icon-refresh"></i>
                    <span>自动布线功能</span>
                    <!-- <el-dropdown trigger="click" @command="handleCommand">
                      <span class="el-dropdown-link">
                        自动布线功能<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled command="a">布线1</el-dropdown-item>
                        <el-dropdown-item disabled command="b">布线2</el-dropdown-item>
                        <el-dropdown-item disabled command="c">布线3</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown> -->
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="系统设置" disabled name="six">6</el-tab-pane>
        </el-tabs>
      </template>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data(){
    return{
      activeName: 'ze',
      // 0 init 1 选择工程 2 map 3 划分 4 环网柜 5 供电单元布线   6诊断评估  7 布线前  8gif播放完成  

    }
  },
  created() {
  },
  mounted(){
    // this.$store.dispatch('SET_allProcessId',0)
  },
  components: {

  },
  computed: {
    processId(){
      console.log(this.$store.getters['AllallProcessId'])
      if(this.$store.getters['AllallProcessId']==0){
        // console.log(this.$route)
        if(this.$route.path!='/example/ad'){
          this.$router.push('/')
        }
      }else if(this.$store.getters['AllallProcessId']==1){
        this.activeName='ze';
        this.$router.push('/example/enginmanage')
      }else if(this.$store.getters['AllallProcessId']==2){
        this.activeName='five';
        this.$router.push('/example/map')
      }else if(this.$store.getters['AllallProcessId']==3){
        this.activeName='five';
        this.$router.push('/example/psdivision')
      }else if(this.$store.getters['AllallProcessId']==4){
        this.activeName='five';
        this.$router.push('/example/psUnit')
      }else if(this.$store.getters['AllallProcessId']==5){
        this.activeName='five';
        this.$router.push('/example/psline')
      }else if(this.$store.getters['AllallProcessId']==6){
        this.activeName='second';
        // this.$router.push('/example/psline')
      }else if(this.$store.getters['AllallProcessId']==7){
        this.activeName='five';
        this.$router.push('/example/psUnit')
      }else if(this.$store.getters['AllallProcessId']==8){
        this.activeName='second';
        // this.$router.push('/example/psUnit')
      }
      return this.$store.getters['AllallProcessId'];
    }
  },
  watch:{
    processId(value){
      // console.log(value)
      if(value==0){
        this.$router.push('/')
      }else if(value==1){
        this.$router.push('/example/enginmanage')
      }else if(value==2){
        this.$router.push('/example/map')
      }
      
    }
  },
  methods: {
    handleClick(tab) {//, event
      if(tab.name=='second'){
        this.$store.dispatch('SET_allProcessId',6)
      }else if(tab.name=='third'){
        // this.$store.dispatch('SET_allProcessId',9)
      }else if(tab.name=='fourth'){
        // this.$store.dispatch('SET_allProcessId',10)
      }else if(tab.name=='five'){
        if(this.$store.getters['AllallProcessId']==0){
          if(this.$route.path!='/example/ad'){
            this.$router.push('/')
          }
        }else if(this.$store.getters['AllallProcessId']==1){
          this.activeName='ze';
          this.$router.push('/example/enginmanage')
        }else if(this.$store.getters['AllallProcessId']==2){
          this.activeName='five';
          this.$router.push('/example/map')
        }else if(this.$store.getters['AllallProcessId']==3){
          this.activeName='five';
          this.$router.push('/example/psdivision')
        }else if(this.$store.getters['AllallProcessId']==4){
          this.activeName='five';
          this.$router.push('/example/psUnit')
        }else if(this.$store.getters['AllallProcessId']==5){
          this.activeName='five';
          this.$router.push('/example/psline')
        }else if(this.$store.getters['AllallProcessId']==6){
          this.activeName='second';
          // this.$router.push('/example/psline')
        }else if(this.$store.getters['AllallProcessId']==7){
          this.activeName='five';
          this.$router.push('/example/psUnit')
        }else if(this.$store.getters['AllallProcessId']==8){
          this.activeName='second';
          // this.$router.push('/example/psUnit')
        }else if(this.$store.getters['AllallProcessId']==9){
          this.activeName='third';
        }else if(this.$store.getters['AllallProcessId']==10){
          this.activeName='fourth';
        }
      }
      // console.log(tab.name, event);
    },
    handleCommand(command) {
      if(command==1){
        this.$router.push('/example/reliabilityreport')
      }else if(command==2){
        this.$router.push('/example/reliability')
      }else if(command==3){
        this.$router.push('/example/map')
      }else if(command==4){//变电站供电范围
        // const loading = this.$loading({
        //     lock: true,
        //     text: '计算中，请耐心等待......',
        //     customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
        //     spinner: 'el-icon-loading',
        //     background: 'rgba(0, 0, 0, 0.7)'
        // });
        // setTimeout(()=>{
        //     loading.close();
        //     this.$store.dispatch('SET_allProcessId',5)
        //     this.$router.push('/example/station')
        // },2000)
      }else if(command==5){
        this.$router.push('/example/psSafe')
      }else if(command==6){//环网柜布点
        const loading = this.$loading({
            lock: true,
            text: '计算中，请耐心等待......',
            customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(()=>{
            loading.close();
            this.$store.dispatch('SET_allProcessId',4)
            this.$router.push('/example/psUnit')
        },2000)
      }else if(command==7){//供电范围划分
        const loading = this.$loading({
            lock: true,
            text: '计算中，请耐心等待......',
            customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(()=>{
            loading.close();
            this.$store.dispatch('SET_allProcessId',3)
            this.$router.push('/example/psdivision')
        },2000)
        
      }
    },
    goPages(pageId){// 0 init 1 供电单元布线 2 负荷 3 开关规划 4 无功规划 5 网络重构
      if(pageId==0){
        this.$store.dispatch('SET_allProcessId',1)
        this.$router.push('/example/enginmanage')
      }else if(pageId==1){
        this.$store.dispatch('SET_allProcessId',5)
        this.$router.push('/example/psline')
      }else if(pageId==2){
        this.$router.push('/example/reportform31-1-1')
      }else if(pageId==3){
        this.$router.push('/example/reportform41-1-1')
      }else if(pageId==4){
        this.$router.push('/example/reportform41-2-1')
      }else if(pageId==5){
        this.$router.push('/example/reportform41-3-1')
      }
    },
    handleCommandEva(command){
      // console.log(command)
      if(command=='1-1'){
        this.$router.replace('/example/reportform1-1')
      }else if(command=='1-2-1'){
        this.$router.replace('/example/reportform1-2-1')
      }else if(command=='1-2-2'){
        this.$router.replace('/example/reportform1-2-2')
      }else if(command=='1-2-3'){
        this.$router.replace('/example/reportform1-2-3')
      }else if(command=='1-3-1'){
        this.$router.replace('/example/reportform1-3-1')
      }else if(command=='1-3-2'){
        this.$router.replace('/example/reportform1-3-2')
      }else if(command=='1-3-3'){
        this.$router.replace('/example/reportform1-3-3')
      }else if(command=='1-3-4'){
        this.$router.replace('/example/reportform1-3-4')
      }else if(command=='1-3-5'){
        this.$router.replace('/example/reportform1-3-5')
      }else if(command=='1-3-6'){
        this.$router.replace('/example/reportform1-3-6')
      }else if(command=='1-4-1'){
        this.$router.replace('/example/reportform1-4-1')
      }else if(command=='1-4-2'){
        this.$router.replace('/example/reportform1-4-2')
      }else if(command=='1-4-3-1'){
        this.$router.replace('/example/reportform1-4-3-1')
      }else if(command=='1-4-4-1'){
        this.$router.replace('/example/reportform1-4-4-1')
      }else if(command=='1-4-4-2'){
        this.$router.replace('/example/reportform1-4-4-2')
      }else if(command=='2-12-1'){
        this.$router.replace('/example/reportform2-12-1')
      }else if(command=='2-12-2-1'){
        this.$router.replace('/example/reportform2-12-2-1')
      }else if(command=='2-12-2-2'){
        this.$router.replace('/example/reportform2-12-2-2')
      }else if(command=='2-12-2-3'){
        this.$router.replace('/example/reportform2-12-2-3')
      }else if(command=='2-12-3-1'){
        this.$router.replace('/example/reportform2-12-3-1')
      }else if(command=='2-12-3-2'){
        this.$router.replace('/example/reportform2-12-3-2')
      }else if(command=='2-12-3-3'){
        this.$router.replace('/example/reportform2-12-3-3')
      }else if(command=='2-12-3-4'){
        this.$router.replace('/example/reportform2-12-3-4')
      }else if(command=='2-12-4-1'){
        this.$router.replace('/example/reportform2-12-4-1')
      }else if(command=='2-12-4-2'){
        this.$router.replace('/example/reportform2-12-4-2')
      }else if(command=='2-12-5'){
        this.$router.replace('/example/reportform2-12-5')
      }else if(command=='2-2-1'){
        this.$router.replace('/example/reportform2-2-1')
      }else if(command=='2-3-1-1'){
        this.$router.replace('/example/reportform2-3-1-1')
      }else if(command=='2-3-2-1'){
        this.$router.replace('/example/reportform2-3-2-1')
      }else if(command=='2-3-3-1'){
        this.$router.replace('/example/reportform2-3-3-1')
      }else if(command=='2-4-1'){
        this.$router.replace('/example/reliability')
      }else if(command=='3-1-1'){
        this.$router.replace('/example/reportform3-1-1')
      }else if(command=='3-2-1'){
        this.$router.replace('/example/reportform3-2-1')
      }else if(command=='4-1-1'){
        this.$router.replace('/example/reportform4-1-1')
      }
      
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__nav{
  margin-left: 35px;
}
/deep/ .el-tabs__header{
  margin-bottom: 0px;
}
.tabArea{
  color: #cecece;
}
.acTabArea{
  color: #000;
}
/deep/ .grayText{
  color: #cecece;
}
/deep/ .acText{
  color: #409EFF;
}
/deep/ .bcText{
  color:#000;
  cursor: pointer;
}
.navbar {
  overflow: hidden;
  position: relative;
  background: #fff;
  position: relative;
  height: 118px;
  .fiexTip{
    cursor: pointer;
    z-index: 2;
    left: 5px;
    top: 8px;
    position: absolute;
    border-bottom: 2px solid #000;
  }
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .diagnosisArea{
    height: 76px;
    border: 1px solid rgba(0,21,41,.08);
    display: flex;
    .perList{
      height: 100%;
      border-right: 1px solid rgba(0,21,41,.08);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .listTitle{
        padding:0px 10px;
        line-height: 12px;
        font-size: 12px;
        font-weight: 600;
        // color: #000000;
        margin-bottom: 10px;
      }
      .list{
        height: 44px;
        width: 100%;
        display: flex;
        .iconArea{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding:0 5px;
          i{
             font-size: 20px;
          }
          span{
            font-size: 12px;
            font-weight: 600;
            // color: #000000;
            line-height: 12px;
          }
          .el-dropdown-link {
            cursor: pointer;
          }
          .el-icon-arrow-down {
            font-size: 12px;
          }
        }
      }
    }
    .perList1{
      color: #000;
      padding: 0 35px;
      .list{
        cursor: pointer;
      }
    }
    .perList2{
      color: #000;
      padding: 0 20px;
      .list{
        cursor: pointer;
      }
    }
  }
  .intelligenceArea{
  }
}
</style>
