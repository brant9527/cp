<template>
  <div v-if="selectType">
    <component
      ref="comp"
      :is="selectType"
      :dataInfo="dataInfo"
      @nextLevel="nextLevel"
      @current="current"
      @betDetail="betDetail"
      @MulDayDetail="MulDayDetail"
      @VipTotal="VipTotal"
      @VipDataDaily="VipDataDaily"
    ></component>
  </div>
</template>

<script>
import Event from "@/Common/Event.js";
import SingleResultVue from "./SingleResult.vue";
import MulResultVue from "./MulResult.vue";
import VipData from "./VipData.vue";
import VipDataDaily from "./VipDataDaily.vue";
import VipTotal from "./VipTotal.vue";
import BetDetail from "./BetDetail.vue";
import MulDayDetail from "./MulDayDetail.vue";
export default {
  components: {
    SingleResultVue,
    MulResultVue,
    VipData,
    VipDataDaily,
    BetDetail,
    MulDayDetail,
    VipTotal,
  },
  data() {
    return {
      selectType: "",
      dataInfo: {},
    };
  },
  mounted() {
    let that = this;
    Event.$on("dateSelect", (info) => {
      console.log(this.selectType);
      if (info.type == "Single") {
        this.selectType = "SingleResultVue";
      } else {
        this.selectType = "MulResultVue";
      }

      this.dataInfo = info;
      this.$nextTick(() => {
        that?.$refs?.comp?.getInfo();
       
      });
    });
  },
  methods: {
    nextLevel(item) {
      Object.assign(this.dataInfo, item);
      this.selectType = "VipData";
    },
    current(item) {
      Object.assign(this.dataInfo, item);

      this.selectType = "VipData";
    },
    betDetail(item) {
      Object.assign(this.dataInfo, item);

      this.selectType = "BetDetail";
    },
    MulDayDetail(item) {
      Object.assign(this.dataInfo, item);

      this.selectType = "MulDayDetail";
    },
    VipTotal(item ){
      Object.assign(this.dataInfo, item);

      this.selectType = 'VipTotal'
    },
    VipDataDaily(item){
      Object.assign(this.dataInfo, item);

      this.selectType = 'VipDataDaily'
      
    }
  },
  destroyed() {
    console.log("清除方法");
    Event.$off();
  },
};
</script>

<style lang="scss" scoped>
body {
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  scrollbar-arrow-color: #ffffff;
  scrollbar-face-color: #0099cc;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-highlight-color: #00ccff;
  scrollbar-3dlight-color: #006699;
  scrollbar-shadow-color: #006699;
  scrollbar-track-color: #ffffff;
}

td {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
}
.show {
  filter: DropShadow(Color=#ffffff, OffX=1, OffY=1, Positive=ture);
}
.k1 {
  border-right-width: 1px;
  border-bottom-width: 2px;
  border-left-width: 1px;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-color: #010134;
  border-bottom-color: #010134;
  border-left-color: #010134;
}
.f2 {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
.f3 {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
a:link {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
}
a:visited {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
}
a:hover {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #003399;
  text-decoration: underline;
}
a.f2:link {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
a.f2:visited {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
a.f2:hover {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #003399;
  text-decoration: underline;
}
.over {
  background-color: #0066cc;
  color: #fff;
}
.f4 {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}
.f5 {
  font-size: 13px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: bold;
}
a.f5:link {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: bold;
}
a.f5:visited {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: bold;
}
a.f5:hover {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #bc0021;
  text-decoration: underline;
}
.K9 {
  background-color: #ffffff;
  border: 1px solid #010133;
  width: 150px;
}
.K10 {
  background-color: #ffffff;
  border: 1px solid #010133;
  width: 155px;
}
.kl {
  background-image: url(https://tpy111net.com/image/index_r4_c6.jpg);
  background-repeat: repeat-y;
  background-position: left top;
}
.kr {
  background-image: url(https://tpy111net.com/image/index_r4_c16.jpg);
  background-repeat: repeat-y;
  background-position: right top;
}

.spec {
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-image: url(https://tpy111net.com/image/index_r10_c13.jpg);
  background-repeat: repeat-x;
}

th.colalt {
  border-left: 1px solid #c1dad7;
  border-top: 0;
  background: #f5fafa url(https://tpy111net.com/image/bullet2.gif)
    no-repeat;
  font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  color: #b4aa9d;
}
.menu_title {
  color: #333333;
  background-color: #ffffff;
}

.menu_title2 {
  color: #000000;
  background-color: #3399ff;
}
</style>