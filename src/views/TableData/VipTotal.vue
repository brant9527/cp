<template>
  <body>
    <form id="myform">
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
        style="margin-top: -3px"
      >
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td align="center" class="div-bg">
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="19%" align="left" valign="middle" class="f5">
                      &nbsp; &nbsp;&nbsp;
                      会员总帐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <td height="27" valign="top" align="center">
              <div id="div1">
                <div>
                  <table
                    cellspacing="1"
                    cellpadding="2"
                    rules="all"
                    id="grivCard"
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
                          font-size: 11px;
                          font-weight: bold;
                          height: 20px;
                        "
                      >
                        <th scope="col" style="width: 12.5%">帐号</th>
                        <th scope="col" style="width: 12.5%">名称</th>
                        <th scope="col" style="width: 12.5%">总押码</th>
                        <th scope="col" style="width: 12.5%">总赢</th>
                        <th scope="col" style="width: 12.5%">洗码量</th>
                        <th scope="col" style="width: 12.5%">洗码费</th>
                        <th scope="col" style="width: 12.5%">公司金额</th>
                        <th scope="col" style="width: 12.5%">&nbsp;</th>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#8EC26F'"
                        onmouseout="this.style.backgroundColor=c"
                        style="background-color: white; font-size: 11px"
                        v-for="item in form"
                        :key="item.key"
                      >
                        <td align="center">
                          <span id="grivCard_LabelName_0">{{
                            item.account
                          }}</span>
                        </td>
                        <td align="center">
                          <span id="grivCard_Label12_0">{{ item.name }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label15_0">{{
                            item.zongyama
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label16_0">{{
                            item.zongying
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label18_0">{{
                            item.ximaliang
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label19_0">{{
                            item.ximafei
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label190_0">{{
                            item.gongsijiner
                          }}</span>
                        </td>
                        <td align="center">
                          <a
                            id="grivCard_lbtnCardDay_0"
                            style="
                              color: -webkit-link;
                              cursor: pointer;
                              text-decoration: underline;
                            "
                            @click="VipDataDaily"
                            >每日明细</a
                          >
                        </td>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#8EC26F'"
                        onmouseout="this.style.backgroundColor=c"
                        style="background-color: white; font-size: 11px"
                      >
                        <td align="center"></td>
                        <td align="center">
                          <span id="grivCard_Label12_1">小计</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label15_1">{{ zongyama }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label16_1">{{ zongying }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label18_1">{{ ximaliang }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label19_1">{{ ximafei }}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label190_1">{{
                            gongsijiner
                          }}</span>
                        </td>
                        <td align="center"></td>
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
      currentAccount: "",
      gongsijiner: 0,

      ximafei: 0,
      ximaliang: 0,
      zongyama: 0,
      zongying: 0,
    };
  },
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    VipDataDaily(item) {
      this.$emit("VipDataDaily", item);
    },
    VipTotal(item) {
      this.$emit("VipTotal", item);
    },

    async getInfo() {
      let { dataList, code, pic } = await this.$http.post("/api/data/getHyzz", {
        account: this.dataInfo.account,
      });

      this.form = dataList;
      dataList.map((item) => {
        this.gongsijiner += Number(item.gongsijiner);
        this.ximafei += Number(item.ximafei);
        this.ximaliang += Number(item.ximaliang);
        this.zongyama += Number(item.zongyama);
        this.zongying += Number(item.zongying);
      });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #ffffff;
  background-image: url(http://tpy111net.com/image/bg_top.jpg);
  background-repeat: repeat-x;
  margin: 0px;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  text-decoration: none;
  color: #333333;
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
.f3 {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
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
.spec {
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-image: url(http://tpy111net.com/image/index_r10_c13.jpg);
  background-repeat: repeat-x;
}

.menu_title {
  color: #333333;
  background-color: #ffffff;
}

.menu_title2 {
  color: #000000;
  background-color: #3399ff;
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