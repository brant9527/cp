<template>
  <body>
    <form method="post" action="" id="myForm">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width: 12px; height: 12px" align="left" valign="top">
              <img
                src="http://tpy111net.com/image/index_r2_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="http://tpy111net.com/image/index_r2_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 12px" align="right" valign="top">
              <img
                src="http://tpy111net.com/image/index_r2_c15.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="margin-top: -4px"
      >
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td align="center" class="div-bg">
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="19%" align="left" valign="middle" class="f5">
                      多日报表查询&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span id="lbDate1">{{ dataInfo.beginDate }}</span
                      >&nbsp;&nbsp;至&nbsp;&nbsp;<span id="lbDate2">{{
                        dataInfo.endDate
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="5" align="right" valign="top" class="kr"></td>
          </tr>
        </tbody>
      </table>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td height="27" valign="top">
              <div id="div1">
                <div>
                  <table
                    cellspacing="1"
                    cellpadding="2"
                    rules="all"
                    id="grivGroup"
                    style="
                      border-width: 0px;
                      background-color: Black;
                      font-family: Arial;
                      width: 98%;
                    "
                  >
                    <tbody>
                      <tr
                        align="center"
                        style="
                          color: White;
                          background-color: Gray;
                          font-size: 10pt;
                          font-weight: bold;
                          height: 20px;
                        "
                      >
                        <th scope="col">帐户</th>
                        <th scope="col">名称</th>
                        <th scope="col">总押码</th>
                        <th scope="col">总赢</th>
                        <th scope="col">洗码量</th>
                        <th scope="col">洗码费</th>
                        <th scope="col">总金额</th>
                        <th scope="col">公司金额</th>
                        <th scope="col">代理金额</th>
                        <th scope="col" style="width: 60px">&nbsp;</th>
                      </tr>
                      <tr
                        align="center"
                        class="td-hover"
                        :style="{
                          'background-color':
                            item.account === account ? 'yellow' : 'white',
                          'font-size': '11px',
                          ' height': '25px',
                        }"
                        v-for="item in form"
                        :key="item.key"
                      >
                        <td align="center">
                          <span id="grivGroup_LabelName_0">{{
                            item.account
                          }}</span>
                        </td>
                        <td align="center">
                          <span id="grivGroup_Label2_0">{{ item.name }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label3_0">{{
                            item.zongyama
                          }}</span>
                        </td>
                        <td
                          align="right"
                          :class="item.zongying < 0 ? 'lose' : ''"
                        >
                          <span id="grivGroup_Label5_0">{{
                            item.zongying
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label7_0">{{
                            item.ximaliang
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label8_0">{{
                            item.ximafei
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label9_0">{{
                            item.zongjiner
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label10_0">{{
                            item.gongsijiner
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label100_0">{{
                            item.dailijiner
                          }}</span>
                        </td>
                        <td align="center">
                          <a
                            id="grivGroup_lbtnGDay_1"
                            style="cursor: pointer"
                            @click="nextLevel(item)"
                            v-if="item.account !== account"
                            >下级代理</a
                          >
                          <a
                            id="grivGroup_lbtnGDay_0"
                            style="cursor: pointer"
                            @click="MulDayDetail(item)"
                            >每日明细帐</a
                          >
                          <a
                            id="grivGroup_lbtnCard_0"
                            style="cursor: pointer"
                            @click="VipTotal(item)"
                            >会员总账</a
                          >
                          <a
                            id="grivGroup_lbtnCardAll_0"
                            style="cursor: pointer"
                            @click="VipDataDaily(item)"
                            >会员明细账</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td width="5" align="right" valign="top" class="kr"></td>
          </tr>
        </tbody>
      </table>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width: 12px; height: 12px" align="left" valign="top">
              <img
                src="http://tpy111net.com/image/index_r13_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="http://tpy111net.com/image/index_r13_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 8px" align="right" valign="top">
              <img
                src="http://tpy111net.com/image/index_r13_c15.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </body>
</template>

<script>
import Event from "@/Common/Event.js";

export default {
  data() {
    return {
      form: {},
    };
  },
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {},
      account: "",
    };
  },
  methods: {
    async nextLevel(item) {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getAgentList",
        { account: item.account }
      );

      this.form = dataList;
    },
    MulDayDetail(item) {
      this.$emit("MulDayDetail", item);
    },
    VipTotal(item) {
      this.$emit("VipTotal", item);
    },
    VipDetail(item) {
      this.$emit("VipDetail", item);
    },
    VipDataDaily(item) {
      this.$emit("VipDataDaily", item);
    },
    async getInfo() {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getReportList",
        { beginDate: this.dataInfo.beginDate, endDate: this.dataInfo.endDate }
      );

      this.form = dataList;
    },
  },
  mounted() {
    this.account = localStorage.getItem("account");
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
a {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
  display: block;
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
  background-image: url(http://tpy111net.com/image/index_r4_c6.jpg);
  background-repeat: repeat-y;
  background-position: left top;
}
.kr {
  background-image: url(http://tpy111net.com/image/index_r4_c16.jpg);
  background-repeat: repeat-y;
  background-position: right top;
}

.spec {
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-image: url(http://tpy111net.com/image/index_r10_c13.jpg);
  background-repeat: repeat-x;
}

th.colalt {
  border-left: 1px solid #c1dad7;
  border-top: 0;
  background: #f5fafa url(http://tpy111net.com/image/bullet2.gif) no-repeat;
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
.td-hover:hover {
  background-color: #8ec26f !important;
}
.lose {
  color: White;
  background-color: Red;
}
.div-bg {
  height: 27px;
  background-image: url(http://tpy111net.com/image/index_r4_c8.jpg);
}
</style>