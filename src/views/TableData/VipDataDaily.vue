<template>
  <body>
    <form
      method="post"
      action="./CardGroupDate12Detail.aspx?nba=g&amp;ti=2022-06-07"
      id="form1"
    >
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATE"
          id="__VIEWSTATE"
          value="/wEPDwUKLTg0NTE0NTI2Nw9kFgICAw9kFgICAQ88KwARAwAPFgQeC18hRGF0YUJvdW5kZx4LXyFJdGVtQ291bnQCAWQBEBYAFgAWAAwUKwAAFgJmD2QWBAIBDw9kFgQeC29ubW91c2VvdmVyBUFjPXRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO3RoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjOEVDMjZGJx4Kb25tb3VzZW91dAUcdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YxYQZg8PFgIeBFRleHQFCDI3NDE0NDg0ZGQCAQ9kFgICAQ8PFgIfBAUKMjAyMi0wNS0yOWRkAgIPDxYCHwQFATZkZAIDDw8WAh8EBQU3MDAwMGRkAgQPDxYCHwQFBTk4ODAwZGQCBQ8PFgIfBAUFODM2MDBkZAIGDw8WAh8EBQYxODg5MDBkZAIHDw8WAh8EBQUyODgwMGRkAgIPDxYCHgdWaXNpYmxlaGRkGAEFD2dyaWR2Q2FyZERldGFpbA88KwAMAQgCAWTXqMCVQBonfbg+Oq5iIrfyKpC/LlAmCAXrPWoGqxOoLw=="
        />
      </div>
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATEGENERATOR"
          id="__VIEWSTATEGENERATOR"
          value="297F11D9"
        />
      </div>
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
        style="margin-top: -4px"
      >
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td
              height="27"
              align="center"
              background="https://tpy111net.com/image/index_r4_c8.jpg"
            >
              <table
                width="99%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                heigh="30"
              >
                <tbody>
                  <tr>
                    <td width="19%" align="left" valign="middle" class="f5">
                      &nbsp; &nbsp; 会员每日明细帐
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
                    id="gridvCardDetail"
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
                        <th scope="col">帐号</th>
                        <th scope="col">日期</th>
                        <th scope="col">名称</th>
                        <th scope="col">信用额度</th>
                        <th scope="col">剩余额度</th>
                        <th scope="col">单边洗码量</th>
                        <th scope="col">双边洗码量</th>
                        <th scope="col">总赢</th>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#8EC26F'"
                        onmouseout="this.style.backgroundColor=c"
                        style="background-color: white; font-size: 11px"
                        v-for="item in form"
                        :key="item.key"
                      >
                        <td align="right" style="width: 14%">{{item.account}}</td>
                        <td align="right" style="width: 16%">
                          <span id="gridvCardDetail_Label2_0">{{item.date}}</span>
                        </td>
                        <td align="right" style="width: 12%">{{item.name}}</td>
                        <td align="right" style="width: 12%">{{item.creditValue}}</td>
                        <td align="right" style="width: 12%">{{item.remainValue}}</td>
                        <td align="right" style="width: 12%">{{item.danbianxima}}</td>
                        <td align="right" style="width: 12%">{{item.shuangbianxima}}</td>
                        <td align="right" style="width: 12%">{{item.zongying}}</td>
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
      form: {},
    };
  },
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async getInfo() {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getHymrmxz",
        { account: this.dataInfo.account }
      );

      this.form = dataList;
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
  background-image: url(https://tpy111net.com/image/index_r10_c13.jpg);
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
</style>