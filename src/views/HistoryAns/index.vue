<template>
  <body>
    <form id="form1">
      <table width="100%" border="0" cellspacing="1" cellpadding="5">
        <tbody>
          <tr>
            <td style="width: 57px">&nbsp; &nbsp;游戏:</td>
            <td style="width: 107px">
              <select
                name="drdGame"
                id="drdGame"
                style="width: 110px; font-size: 10pt"
              >
                <option selected="selected" value="1">百家乐一</option>
                <option value="2">百家乐二</option>
                <option value="3">百家乐三</option>
                <option value="4">百家乐四</option>
                <option value="5">龙虎台一</option>
                <option value="6">龙虎台二</option>
              </select>
            </td>
            <td style="width: 38px">日期:</td>
            <td style="width: 111px">
              <select
                name="selectDate"
                id="selectDate"
                v-model="beginDate"
                style="width: 110px"
              >
                <option
                  selected="selected"
                  :value="item"
                  v-for="(item, index) in options"
                  :key="item.key"
                >
                  {{ index == 0 ? "今日" : item }}
                </option>
              </select>
            </td>
            <td style="width: 31px">场次:</td>
            <td style="width: 98px">
              <input
                name="Round"
                type="text"
                value=""
                maxlength="2"
                id="Round"
                onkeydown="isnum()"
                style="width: 89px"
              />
            </td>
            <td>
              <input
                type="submit"
                name="btnSure"
                value="确定"
                id="btnSure"
                @click="submit"
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
                src="https://tpy111net.com/image/index_r2_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="https://tpy111net.com/image/index_r2_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 12px" align="right" valign="top">
              <img
                src="https://tpy111net.com/image/index_r2_c15.jpg"
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
        align="center"
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
                      &nbsp; &nbsp; 开答明细
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="5" align="right" valign="top" class="kr"></td>
          </tr>
        </tbody>
      </table>
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
      >
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td height="27" valign="top" align="center">
              <div id="myDiv">
                <div></div>
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
                src="https://tpy111net.com/image/index_r13_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="https://tpy111net.com/image/index_r13_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 8px" align="right" valign="top">
              <img
                src="https://tpy111net.com/image/index_r13_c15.jpg"
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
      options: [],
      beginDate: "",
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
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
    this.getDate();
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #ffffff;
  background-image: url(https://tpy111net.com/image/bg_top.jpg);
  background-repeat: repeat-x;
  margin: 0px;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  text-decoration: none;
  color: #333333;
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
.div-bg {
  height: 27px;
  background-image: url(https://tpy111net.com/image/index_r4_c8.jpg);
}
</style>