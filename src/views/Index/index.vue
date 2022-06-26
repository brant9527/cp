<template>
  <div>
    <div
      style="
        width: 1000px;
        position: absolute;
        left: 0;
        top: 20%;
        bottom: 0;
        right: 0;
        margin: auto;
      "
    >
      <div class="01"></div>
      <div>
        <div class="c-03"></div>
        <div class="c-04"></div>
        <div style="width: 495px; height: 185px; float: left">
          <div class="c-05"></div>
          <div>
            <div class="c-06">
              <form method="post"  id="form1">
               
                <table
                  id="table2"
                  style="
                    width: 100%;
                    padding: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    text-align: center;
                    border: 0;
                  "
                >
                  <tbody>
                    <tr>
                      <td style="width: 70px; height: 25px"></td>
                      <td style="width: 125px" colspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <span style="font-size: 10pt; color: #ffffff"
                          >用户名</span
                        >
                      </td>
                      <td style="width: 125px; height: 28px" colspan="2">
                        <input
                         v-model="formData.username"
                          type="text"
                          id="txtLogingName"
                          style="width: 114px; height: 16px"
                          value="5858"
                        />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <span style="font-size: 10pt; color: #ffffff"
                          >密 码</span
                        >
                      </td>
                      <td style="height: 28px; width: 125px" colspan="2">
                        <input
                         v-model="formData.password"

                          name="txtPwd"
                          type="password"
                          id="txtPwd"
                          style="width: 114px; height: 16px"
                        />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style="height: 28px">
                        <span style="font-size: 10pt; color: #ffffff"
                          >验证码</span
                        >
                      </td>
                      <td style="width: 54px">
                        <input
                         v-model="formData.code"

                          name="txtCheckCode"
                          type="text"
                          id="txtCheckCode"
                          style="width: 48px; height: 16px"
                        />
                      </td>
                      <td style="width: 61px; vertical-align: bottom">
                        <img
                          id="Image1"
                          :src="codeUrl"
                          style="height: 22px; width: 55px"
                        />
                      </td>
                      <td>
                        <a
                          @click="getCode"
                          style="
                            color: white;
                            font-size: 10pt;
                            text-decoration: none;
                          "
                         
                          >下一张</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td colspan="2">
                        <input
                          type="submit"
                          name="ibtnLogin"
                          value="进入 / Enter"
                          id="ibtnLogin"
                          @click="login"
                          style="height: 25px; width: 120px"
                        />
                        <!-- 进入 / Enter</div> -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div class="c-07"></div>
          </div>
          <div>
            <div class="c-08"></div>
            <div class="c-09"></div>
          </div>
        </div>
        <div>
          <div class="c-10"></div>
          <div class="c-11"></div>
          <div class="c-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeUrl: "",
      formData: {
        captchaId: "",
        code: "",
        password: "",
        username: "",
      },
    };
  },
  methods: {
    async getCode() {
      let { captchaVo, code, pic } = await this.$http("/api/verify/getImage");
      this.codeUrl = captchaVo.pic;
      this.formData.captchaId = captchaVo.captchaId
    },
    async login(e) {
      e.preventDefault()
      let { captchaVo, code,data:{account,name} } = await this.$http.post("/api/verify/login",this.formData);
      if(code===0){
        this.$router.push('/zh/agent/Main.html')
        localStorage.setItem('account',account)
        localStorage.setItem('name',name)
        
      }
    },
  },
  mounted() {
    this.getCode();
  },
};
</script>

<style lang="scss" scoped>
.c-01 {
  width: 282px;
  height: 79px;
  background-image: url("./image/page_01.jpg");
}
.c-03 {
  width: 282px;
  height: 185px;
  background-image: url("./image/page_03.jpg");
  float: left;
}
.c-04 {
  width: 223px;
  height: 185px;
  background-image: url("./image/page_04.jpg");
  float: left;
  margin-left: -1px;
}
.c-05 {
  width: 495px;
  height: 25px;
  background-image: url("./image/page_05.gif");
}
.c-06 {
  width: 266px;
  height: 151px;
  background-image: url("./image/page_06.gif");
  float: left;
}
.c-07 {
  width: 229px;
  height: 151px;
  background-image: url("./image/page_07.gif");
  float: left;
}
.c-08 {
  width: 266px;
  height: 9px;
  background-image: url("./image/page_08.gif");
  float: left;
}
.c-09 {
  width: 229px;
  height: 9px;
  background-image: url("./image/page_09.gif");
  float: left;
}
.c-10 {
  width: 282px;
  height: 97px;
  background-image: url("./image/page_10.gif");
  float: left;
}
.c-11 {
  width: 489px;
  height: 97px;
  background-image: url("./image/page_11.gif");
  float: left;
  margin-left: -1px;
}
.c-12 {
  width: 229px;
  height: 97px;
  background-image: url("./image/page_12.gif");
  float: left;
}

</style>