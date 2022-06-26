<template>
  <body style="font-family: Times New Roman">
    <form method="post" action="./bkset.aspx" id="form2">
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATE"
          id="__VIEWSTATE"
          value="/wEPDwUJNzgxNjM2MzcwD2QWAgIDD2QWAgILDw8WAh4EVGV4dGVkZGTAv+uOsZ5YWkS7rB5vG2n1D0vQUeOLU0UeL9EqgUgWCA=="
        />
      </div>
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATEGENERATOR"
          id="__VIEWSTATEGENERATOR"
          value="64F3DA46"
        />
      </div>
      <table
        style="
          width: 604px;
          border: 0;
          padding: 0;
          border-collapse: collapse;
          border-spacing: 0;
          margin-top: 10px;
        "
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <img
                src="http://tpy111net.com/index_r2_c6.jpg"
                style="width: 14px; height: 12px"
              />
              <img
                src="http://tpy111net.com/index_r2_c11.jpg"
                style="width: 574px; height: 12px; margin-left: -3px"
              />
              <img
                src="http://tpy111net.com/index_r2_c15.jpg"
                style="width: 14px; height: 12px; margin-left: -3px"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        style="
          width: 600px;
          border: 0;
          padding: 0;
          border-collapse: collapse;
          border-spacing: 0;
          margin-top: -5px;
        "
        align="center"
      >
        <tbody>
          <tr>
            <td
              class="kl"
              style="width: 3px; text-align: left; vertical-align: top"
            ></td>
            <td>
              <table
                style="
                  width: 100%;
                  border: 0;
                  padding: 0;
                  border-collapse: collapse;
                  border-spacing: 0;
                "
                id="AutoNumber1"
              >
                <tbody>
                  <tr style="background-color: gray; height: 30px">
                    <td style="text-align: center; vertical-align: middle">
                      <span
                        style="
                          font-size: 17px;
                          color: #ffffff;
                          font-family: 'Adobe Heiti Std';
                          font-weight: bold;
                        "
                        >设置银行卡</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        style="
                          width: 100%;
                          border: 0;
                          padding: 0;
                          border-collapse: collapse;
                          border-spacing: 0;
                          font-size: 14px;
                        "
                        id="AutoNumber2"
                      >
                        <tbody>
                          <tr>
                            <td style="height: 30px"></td>
                          </tr>
                          <tr>
                            <td
                              style="
                                height: 30px;
                                width: 40%;
                                text-align: right;
                              "
                            >
                              银行名称：
                            </td>
                            <td
                              style="
                                height: 30px;
                                width: 100%;
                                text-align: left;
                              "
                            >
                              <input
                                name="txt_bank"
                                type="text"
                                maxlength="20"
                                id="txt_bank"
                                placeholder="银行全称"
                                style="width: 200px"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right; height: 30px">
                              账户姓名：
                            </td>
                            <td style="text-align: left; height: 30px">
                              <input
                                name="txt_name"
                                type="text"
                                maxlength="20"
                                id="txt_name"
                                style="width: 200px"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right; height: 30px">
                              银行卡号：
                            </td>
                            <td style="text-align: left; height: 30px">
                              <input
                                name="txt_card"
                                type="text"
                                maxlength="30"
                                id="txt_card"
                                onkeyup="this.value=this.value.replace(/\D/g,'').replace(/....(?!$)/g,'$&amp; ')"
                                style="width: 200px"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                text-align: right;
                                height: 30px;
                                vertical-align: top;
                              "
                            >
                              备注信息：
                            </td>
                            <td style="text-align: left; height: 30px">
                              <textarea
                                name="txt_remark"
                                rows="2"
                                cols="20"
                                id="txt_remark"
                                placeholder="开户行、手机号等，可不填"
                                style="height: 60px; width: 204px"
                              ></textarea>
                            </td>
                          </tr>
                          <tr>
                            <td style="height: 10px"></td>
                          </tr>
                          <tr>
                            <td style="height: 33px"></td>
                            <td style="text-align: left; height: 33px">
                              <input
                                type="submit"
                                name="btnSure"
                                value="提交"
                                id="btnSure"
                                class="button black"
                              />
                              <br /><br /><span
                                id="lbMessage"
                                style="
                                  display: inline-block;
                                  color: Red;
                                  width: 69px;
                                "
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <span id="Label1"
                                >温馨提示：为了提高结账、汇款效率，建议贵宾从这里提交银行卡信息，然后和我司核对。如有疑问，请咨询客服。</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
        style="
          width: 604px;
          border: 0;
          padding: 0;
          border-collapse: collapse;
          border-spacing: 0;
          margin-top: -5px;
        "
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <img
                src="http://tpy111net.com/index_r13_c6.jpg"
                style="width: 14px; height: 8px"
              />
              <img
                src="http://tpy111net.com/index_r13_c11.jpg"
                style="width: 574px; height: 8px; margin-left: -3px"
              />
              <img
                src="http://tpy111net.com/index_r13_c15.jpg"
                style="width: 14px; height: 8px; margin-left: -3px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>

    <div
      class="xl-chrome-ext-bar"
      id="xl_chrome_ext_{4DB361DE-01F7-4376-B494-639E489D19ED}"
      style="display: none"
    >
      <div class="xl-chrome-ext-bar__logo"></div>

      <a
        id="xl_chrome_ext_download"
        href="javascript:;"
        class="xl-chrome-ext-bar__option"
        >下载视频</a
      >
      <a
        id="xl_chrome_ext_close"
        href="javascript:;"
        class="xl-chrome-ext-bar__close"
      ></a>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/btnstyle.scss';

body {
	background-color: #FFFFFF;
	background-image: url(http://tpy111net.com/bg_top.jpg);
	background-repeat: repeat-x;
	margin: 0px;
	font-size: 12px;
	font-style: normal;
	line-height: 15px;
	text-decoration: none;
	color: #333333;
}

.kl {
	background-image: url(http://tpy111net.com/index_r4_c6.jpg);
	background-repeat: repeat-y;
	background-position: left top;
}
.kr {
	background-image: url(http://tpy111net.com/index_r4_c16.jpg);
	background-repeat: repeat-y;
	background-position: right top;
}

.spec { 
	font-size: 12px;
	line-height: 18px;
	font-weight: bold;
	color: #FFFFFF;
	text-decoration: none;
	background-image: url(http://tpy111net.com/index_r10_c13.jpg);
	background-repeat: repeat-x;
}

.menu_title {
	COLOR: #333333; background-color: #ffffff; 
}

.menu_title2 {
	COLOR: #000000; background-color: #3399FF; 
}

</style>