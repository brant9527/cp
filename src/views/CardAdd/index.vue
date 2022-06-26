<template>
  <body>
    <form  id="form1">
     
   

      <div>
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          style="font-size: large"
        >
          <tbody>
            <tr>
              <td
                align="center"
                colspan="2"
                style="font-size: large; font-family: 宋体; height: 28px"
                valign="middle"
              ></td>
            </tr>
            <tr>
              <td
                id="txtFather"
                align="center"
                colspan="2"
                style="font-size: large; font-family: 宋体; height: 50px"
                valign="middle"
              >
                上级编号：<span id="lbFID">{{account}}</span>&nbsp;&nbsp;
                上级名称：<span id="lbFName">{{name}}</span>
              </td>
            </tr>
            <tr>
              <td
                align="right"
                style="width: 134px; text-align: right; height: 29px"
              >
                名称:
              </td>
              <td style="width: 280px; height: 29px">
                <input
                  name="txtName"
                  type="text"
                  id="txtName"
                  style="width: 200px"
                />
              </td>
            </tr>
            <tr>
              <td
                align="right"
                style="width: 134px; height: 29px; text-align: right"
              >
                密码:
              </td>
              <td style="width: 280px; height: 29px">
                <input
                  name="txtPassWord"
                  type="text"
                  id="txtPassWord"
                  size="18"
                  style="width: 200px"
                />
              </td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 29px">
                信用额度:
              </td>
              <td style="width: 280px; height: 29px">
                <input
                  name="txtCreditMoney"
                  type="text"
                  id="txtCreditMoney"
                  style="width: 200px"
                />
              </td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 29px">洗码比:</td>
              <td style="width: 280px; height: 29px">
                <input
                  name="txtWaterPercent"
                  type="text"
                  id="txtWaterPercent"
                  style="width: 185px"
                  value="0"
                />%
              </td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 29px">
                洗码选择:
              </td>
              <td style="width: 280px; height: 29px">
                <select
                  name="WaterSelect"
                  id="WaterSelect"
                  style="width: 206px"
                >
                  <option selected="selected" value="0">双边洗码</option>
                  <option value="1">单边洗码</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style="width: 134; height: 29px" align="right">
                押码设置类别:
              </td>
              <td style="height: 29px; width: 280px" align="left">
                <select
                  name="ddlCardSetupID"
                  id="ddlCardSetupID"
                  style="font-size: 9pt; width: 166px"
                >
                  <option value="0">5千台</option>
                  <option value="1">1万台</option>
                  <option selected="selected" value="2">2万台</option>
                  <option value="5">5万台</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style="height: 30px" align="center" colspan="2">
                <span id="LbInfo" style="color: Red"></span>
              </td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 19px"></td>
              <td style="width: 280px; height: 19px"></td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 21px">
                <input
                  id="Hidden1"
                  name="GroupID"
                  style="width: 103px"
                  type="hidden"
                />
              </td>
              <td style="width: 280px; height: 21px">
                <input
                  type="submit"
                  name="ButOk"
                  value="确定"
                  id="ButOk"
                  style="
                    vertical-align: middle;
                    width: 81px;
                    text-align: center;
                      margin-right: 10px;

                  "
                  @click="close"
                />
                <a href="javascript:return_prepage();"
                  ><input
                    name="ButCancel"
                    type="button"
                    id="ButCancel"
                    value="返回"
                    @click="close"
                    style="
                      width: 74px;
                      vertical-align: middle;
                      text-align: center;
                    "
                /></a>
              </td>
            </tr>
            <tr>
              <td align="right" style="width: 134px; height: 21px"></td>
              <td style="width: 280px; height: 21px"></td>
            </tr>
            <tr>
              <td style="width: 134px; height: 40px"></td>
              <td style="width: 280px; height: 40px">
                &nbsp; &nbsp; &nbsp; &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>

   
  </body>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      account: "",
    };
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.account = localStorage.getItem("account");
  },
  methods: {
    close(event) {
        event.preventDefault();
        window.close()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>