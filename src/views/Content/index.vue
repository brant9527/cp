<template>
  <div class="div-wrap">
    <head-comp-vue @changeComp="changeComp"/>
    <div class="route-content">
      <component :is="currentComp" @changeComp="changeComp" :dataTemp="dataTemp"></component>
    </div>
  </div>
</template>

<script>
import HeadCompVue from "@/components/HeadComp.vue";
import Center from '../Center'
import Security from '../Security'
import TableData from '../TableData'
import Password from '../Password'
import Bank from '../Bank'
import BetDetail from '../TableData/BetDetail.vue'
import HistoryAns from '../HistoryAns'
import Proxy from '../Proxy'
import dqhy from '../dqhy'

export default {
  components: {
    HeadCompVue,
    Center,
    Security,
    TableData,
    Password,
    Bank,
    HistoryAns,
    BetDetail,
    Proxy,
    dqhy
  },
  data() {
    return {
      currentComp: 'Center',
      dataTemp:{}
    }
  },
  methods: {
    changeComp(val) {
      this.dataTemp={}
      let type = typeof val
      if(type =='string'){
      this.currentComp = val

      }else{
        this.currentComp = val.type
        this.dataTemp =val.dataTemp
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.div-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
}
.route-content {
  height: calc(100% - 105px);
  margin-top: 5px;
  overflow: auto;
}
</style>