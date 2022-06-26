<template>
  <body>
    <form method="post" id="form1">
      <div
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
       class="div-1"
      >
        <div>
          <div style="display: flex">
            <div style="height: 76px; flex: 1">
              <img
                src="http://tpy111net.com/image/index_r1_c3.jpg"
                alt=""
                style="display: block; margin: auto"
              />
            </div>
            <div style="height: 76px; overflow: hidden; flex: 9" align="left">
              <div
                style="
                  color: Black;
                  height: 25px;
                  line-height: 25px;
                  margin-top: 16px;
                "
              >
                <div
                  style="width: 650px; overflow: hidden; white-space: nowrap"
                >
                  <div
                    ref="news"
                    :style="{
                      float: 'left',
                      display: 'inline',
                      'font-size': '11pt',
                      'font-family': 'Microsoft YaHei',
                      'margin-left': currentLeft + 'px',
                    }"
                  >
                    {{ title }}
                  </div>
                </div>
              </div>
              <tr
                style="
                  background-color: #ff3333;

                  display: inline-block;
                  width: 100%;
                "
              >
                <td
                  style="
                    height: 19px;

                    font-weight: bold;
                    white-space: nowrap;
                    vertical-align: middle;
                  "
                >
                  &nbsp; &nbsp; |
                  <a
                    @click="changeComp('Security')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                    >我的资料</a
                  >
                  |
                  <a
                    @click="changeComp('TableData')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                    >报表查询</a
                  >
                  |
                  <a
                    @click="changeComp('BetDetail')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                  >
                    会员押码查询</a
                  >
                  |
                  <a
                    @click="changeComp('HistoryAns')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                  >
                    历史开答</a
                  >
                  |
                  <a
                    @click="changeComp('Password')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                    >更改密码</a
                  >|
                  <a
                    @click="changeComp('Center')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                    >安全中心</a
                  >
                  |<a
                    @click="changeComp('Bank')"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                    >设置银行</a
                  >
                  |<a
                    id="LinkButton1"
                    style="
                      color: White;
                      cursor: pointer;
                      text-decoration: none;
                      font-size: 10pt;
                    "
                      @click="login"
                    >安全退出</a
                  >
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </form>
  </body>
</template>

<script>
export default {
  data() {
    return {
      title:
        " 公告：本平台不接受中国大陆地区的电话和IP注册，娱乐及交易。欢迎光临太平洋在线娱乐，近期发现我公司网站被非法剽窃，已对我司信誉及客户利益造成了严重侵害，特此严正申明：公司唯一网站“HTTP://WWW.XG111.NET”，如有疑问请拨打客服电话：0066614655705,0066614655703;结账汇款请拨打财务电话：0066614655687,0066631237810,0066631240266",

      maxWidth: 0,
      currentLeft: 650,
    };
  },
  methods: {
    login(){
      this.$router.push({name:'login-default'})
    },
    changeComp(value) {
      this.$emit("changeComp", value);
    },
    async getNotice() {
      let { content, code } = await this.$http.post("/api/data/getNotice");
      if (code === 0) {
        this.title = content;
      }
    },
    moveing() {
      let that = this;
      this.maxWidth = that.$refs.news.offsetWidth;
      setInterval(() => {
        if (this.maxWidth < Math.abs(this.currentLeft)) {
          this.currentLeft = 650;
        } else {
          this.currentLeft -= 3;
        }
      }, 100);
    },
  },
  mounted() {
    this.getNotice();
    this.moveing();
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fff;
  background-image: url(http://tpy111net.com/image/bg_top.jpg);
  background-repeat: repeat-x;
  margin: 0;
  height: 100px;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  text-decoration: none;
  color: #333;
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
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  background-image: url(http://tpy111net.com/image/index_r10_c13.jpg);
  background-repeat: repeat-x;
}

.f5 {
  font-size: 13px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: 700;
}

a.f5:link {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: 700;
}

a.f5:visited {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: 700;
}

a.f5:hover {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  font-weight: 700;
  color: #bc0021;
  text-decoration: underline;
}

.menu_title {
  color: #333;
  background-color: #fff;
}

.menu_title2 {
  color: #000;
  background-color: #39f;
}
.div-1{
          background-image: url(http://tpy111net.com/image/index_r1_c1.jpg);

}
</style>