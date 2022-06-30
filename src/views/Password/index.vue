<template>
  <body style="font-family: Times New Roman">
    <form method="post" action="./pwd.aspx" id="form2">
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATE"
          id="__VIEWSTATE"
          value="/wEPDwUKLTk0NTk3OTI1NQ9kFgICAw9kFgICCQ8PFgIeBFRleHRlZGRk7f9USsy4DJ9eDOEat1aBute8hWch1yFU3/b5Cw2pcVw="
        />
      </div>
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATEGENERATOR"
          id="__VIEWSTATEGENERATOR"
          value="7EF39D78"
        />
      </div>
      <table
        width="500px"
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
      >
        <tbody style="line-height: 0px;">
          <tr>
            <td width="1%" height="12" align="left" valign="top">
              <img
                src="https://tpy111net.com/image/index_r2_c6.jpg"
                width="12"
                height="12"
              />
            </td>
            <td
              width="98%"
              background="https://tpy111net.com/image/index_r2_c11.jpg"
            ></td>
            <td width="1%" height="12" align="right" valign="top">
              <img
                src="https://tpy111net.com/image/index_r2_c15.jpg"
                width="12"
                height="12"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="500px"
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
      >
        <tbody >
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td valign="top" align="center">
              <table
                width="100%"
                height="100px"
                border="0"
                cellpadding="0"
                cellspacing="0"
                id="AutoNumber1"
              >
                <tbody>
                  <tr bgcolor="Gray" height="30px">
                    <td align="center" valign="middle">
                      <span
                        style="
                          height: 30px;
                          font-size: 17px;
                          color: #ffffff;
                          font-family: 'Adobe Heiti Std';
                          font-weight: bold;
                        "
                        >更 改 密 码</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        id="AutoNumber2"
                      >
                        <tbody>
                          <tr>
                            <td style="height: 10px"></td>
                          </tr>
                          <tr>
                            <td width="40%" align="right">旧密码：</td>
                            <td width="100%" align="left">
                              <input
                                name="txt_PasswordOld"
                                type="password"
                                maxlength="20"
                                id="txt_PasswordOld"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td align="right">新密码：</td>
                            <td align="left">
                              <input
                                name="txt_PasswordNew1"
                                type="password"
                                maxlength="20"
                                id="txt_PasswordNew1"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td align="right">确定密码：</td>
                            <td align="left">
                              <input
                                name="txt_PasswordNew"
                                type="password"
                                maxlength="20"
                                id="txt_PasswordNew"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style="height: 10px"></td>
                          </tr>
                          <tr>
                            <td style="height: 33px"></td>
                            <td align="left" style="height: 33px">
                              <input
                                type="submit"
                                name="btnSure"
                                value="确定"
                                onclick="return check();"
                                id="btnSure"
                                class="button black"
                              />
                              <br /><br />
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
        width="500px"
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
      >
        <tbody style="line-height: 0px;">
          <tr>
            <td width="5" align="left" valign="top">
              <img
                src="https://tpy111net.com/image/index_r13_c6.jpg"
                width="12"
                height="8"
              />
            </td>
            <td
              width="98%"
              height="8"
              background="https://tpy111net.com/image/index_r13_c11.jpg"
            ></td>
            <td width="5" align="right" valign="top">
              <img
                src="https://tpy111net.com/image/index_r13_c15.jpg"
                width="12"
                height="8"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>

 
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/btnstyle.scss';
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

.menu_title {
  color: #333333;
  background-color: #ffffff;
}

.menu_title2 {
  color: #000000;
  background-color: #3399ff;
}
</style>