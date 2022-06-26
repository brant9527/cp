<template>
  <body>
    <form id="form1">
      <table border="0" cellspacing="0" cellpadding="5">
        <tbody>
          <tr>
            <td>&nbsp; &nbsp; &nbsp; 游戏:</td>
            <td>
              <select
                name="GameSelect"
                id="GameSelect"
                v-model="gameType"
                style="width: 110px"
              >
                <option value="1">百家乐一</option>
                <option value="2">百家乐二</option>
                <option value="3">百家乐三</option>
                <option value="4">百家乐四</option>
                <option value="5">龙虎台一</option>
                <option value="6">龙虎台二</option>
                <option value="7">增点与洗点</option>
                <option selected="selected" value="8">全部</option>
              </select>
            </td>
            <td>
              <label> 日期:</label>
            </td>
            <td>
              <select
                name="DateSelect"
                id="DateSelect"
                style="width: 110px"
                v-model="beginDate"
              >
                <option
                  :value="item"
                  v-for="(item, index) in options"
                  :key="item"
                >
                  {{ index == 0 ? "今日" : item }}
                </option>
              </select>
            </td>
            <td>会员帐号:</td>
            <td>
              <input
                name="txt_id"
                type="text"
                v-model="account"
                maxlength="8"
                id="txt_id"
                style="width: 89px"
              />
            </td>
            <td>
              <input
                type="submit"
                name="btnSure"
                value="确定"
                @click="request"
                id="btnSure"
                style="height: 27px; width: 87px"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
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
            <td
              align="center"
              style="
                height: 27px;
                background-image: url(http://tpy111net.com/image/index_r4_c8.jpg);
              "
            >
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td
                      width="19%"
                      align="left"
                      valign="middle"
                      class="f5"
                      style="height: 20px"
                    >
                      &nbsp; &nbsp; 会员押注明细&nbsp;&nbsp;&nbsp;&nbsp;
                      <span id="lbDate"></span
                      >（如对注单有疑问，若总账无误，请核对下注时间，看是否与多台下注有关）
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
            <td
              height="27"
              valign="top"
              :style="{
                visibility: dataList && dataList.length > 0 ? '' : 'hidden',
              }"
            >
              <div id="myDiv">
                <div>
                  <table
                    cellspacing="1"
                    cellpadding="2"
                    rules="all"
                    id="gridvBjlGame"
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
                        <th scope="col">台桌</th>
                        <th scope="col">场次</th>
                        <th scope="col">局号</th>
                        <th scope="col">开答</th>
                        <th scope="col">下注时间</th>
                        <th scope="col">开答时间</th>
                        <th scope="col">剩余额度</th>
                        <th scope="col">总押码</th>
                        <th scope="col">单边洗码</th>
                        <th scope="col">双边洗码</th>
                        <th scope="col">赢</th>
                        <th scope="col">闲（虎）</th>
                        <th scope="col">和</th>
                        <th scope="col">庄（龙）</th>
                        <th scope="col">闲对子</th>
                        <th scope="col">庄对子</th>
                        <th scope="col">IP</th>
                        <th scope="col">登录地址</th>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#3399FF'"
                        onmouseout="this.style.backgroundColor=c"
                        style="background-color: white; font-size: 11px"
                        v-for="item in dataList"
                        :key="item.key"
                      >
                        <td>
                          <span id="gridvBjlGame_LabelGameIndex_0">{{
                            item.taizhuo
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvBjlGame_Label1_0">{{
                            item.changci
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvBjlGame_Label2_0">{{
                            item.juhao
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvBjlGame_Label3_0">{{
                            item.kaida
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvBjlGame_Label24_0">{{
                            item.xiazhuTime
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvBjlGame_Label4_0">{{
                            item.kaidaTime
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label6_0">{{
                            item.remainCredit
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label5_0">{{
                            item.zongyama
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label51_0">{{
                            item.danbianxima
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label52_0">{{
                            item.shuangbianxima
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label7_0">{{
                            item.ying
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label8_0">{{
                            item.xian
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label9_0">{{
                            item.he
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label10_0">{{ item.zhuang }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label11_0">{{
                            item.xianduizi
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label12_0">{{
                            item.zhuangduizi
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label113_0">{{
                            item.ipAddress
                          }}</span>
                        </td>
                        <td align="right">
                          <span id="gridvBjlGame_Label1144_0">{{
                            item.loginAddress
                          }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="dataList && dataList.length > 0">
                  <table
                    cellspacing="1"
                    cellpadding="2"
                    rules="all"
                    id="gridvPoint"
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
                        <th scope="col">类别</th>
                        <th scope="col">剩余额度</th>
                        <th scope="col">增加额度</th>
                        <th scope="col">时间</th>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#3399FF'"
                        onmouseout="this.style.backgroundColor=c"
                        style="background-color: white; font-size: 11px"
                        v-for="item in eduList"
                        :key="item.key"
                      >
                        <td>
                          <span id="gridvPoint_Label1_0">{{ item.type }}</span>
                        </td>
                        <td>
                          <span id="gridvPoint_Label4_0">{{
                            item.remainValue
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvPoint_Label2_0">{{
                            item.addValue
                          }}</span>
                        </td>
                        <td>
                          <span id="gridvPoint_Label3_0">{{ item.date }}</span>
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
export default {
  data() {
    return {
      account: "",
      dataList: [],
      eduList: [],
      gameType: "8",
      options: [],
      beginDate: "",
    };
  },
  computed: {},
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
    dataTemp:{
      type: Object,
      default: () => {},
    }
  },
  methods: {
    getInfo() {
     
      this.request();
    },
    async request(e) {
      e && e.preventDefault();
      let { dataList, eduList, code } = await this.$http.post(
        "/api/data/getYamamingxi",
        {
          beginDate: this.beginDate,
          account: this.account,
        }
      );

      this.dataList = dataList;
      this.eduList = eduList;
    },
    getDate() {
      let nowDate = new Date().getTime();
      let dayTime = 1000 * 3600 * 24;
      for (let index = 0; index < 16; index++) {
        const currentTime = nowDate - index * dayTime;
        let year = new Date(currentTime).getFullYear();
        let month = new Date(currentTime).getMonth() + 1;
        let day = new Date(currentTime).getDate();
        this.options.push(`${year}-${month}-${day}`);
      }
      this.beginDate = this.options[0];
    },
  },
  mounted() {
    this.account = this.dataInfo?.account||this.dataTemp?.account;


    this.getInfo();
    this.getDate();
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

.spec {
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-image: url(http://tpy111net.com/image/index_r10_c13.jpg);
  background-repeat: repeat-x;
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
.menu_title {
  color: #333333;
  background-color: #ffffff;
}

.menu_title2 {
  color: #000000;
  background-color: #3399ff;
}
</style>