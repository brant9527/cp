<template>
  <body style="margin: 8px">
    <form id="form1">
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="font-size: 11pt; font-family: SimHei"
      >
        <tbody>
          <tr>
            <td
              style="height: 55px; font-size: larger; font-family: SimHei"
              colspan="2"
              id="txtFather"
              align="center"
              valign="middle"
            >
              上级编号：<span id="lbFID">{{ account }}</span
              >&nbsp;&nbsp; 上级名称：<span id="lbFName">{{ name }}</span>
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">
              代理名称&nbsp;
            </td>
            <td style="width: 274px" align="left">
              <input
                name="txtName"
                type="text"
                id="txtName"
                onpaste="return false;"
                style="width: 160px"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">密码&nbsp;</td>
            <td style="width: 274px" align="left">
              <input
                name="txtPwd"
                type="text"
                id="txtPwd"
                placeholder="密码至少包含数字和字母"
                style="width: 160px"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">
              信用额度&nbsp;
            </td>
            <td style="width: 274px; height: 11px" align="left">
              <input
                name="txtErDu"
                type="text"
                id="txtErDu"
                placeholder="0"
                onpaste="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                onkeyup="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                style="width: 160px; margin-right: 10px"
              />
              <input
                name="CMLable"
                type="text"
                id="CMLable"
                style="width: 74px"
                readonly="readonly"
                value="0"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 26px" align="right">占成&nbsp;</td>
            <td style="width: 274px; height: 26px" align="left">
              <input
                name="txtOccupyPer"
                type="text"
                id="txtOccupyPer"
                placeholder="0"
                onpaste="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                onkeyup="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                style="width: 160px; margin-right: 10px"
              />
              <input
                name="StockLabel"
                type="text"
                id="StockLabel"
                style="width: 74px"
                readonly="readonly"
                value="20.00%"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">
              洗码比&nbsp;
            </td>
            <td style="height: 30px; width: 274px" align="left">
              <input
                name="txtWaterPer"
                type="text"
                id="txtWaterPer"
                placeholder="0"
                onpaste="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                onkeyup="this.value=this.value.replace(/[^\d\.]+?/g,'')"
                style="width: 160px; margin-right: 10px"
              />
              <input
                name="WaterPercentLable"
                type="text"
                id="WaterPercentLable"
                style="width: 74px"
                readonly="readonly"
                value="1.5%"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 27px" align="right">
              洗码选择&nbsp;
            </td>
            <td style="height: 30px; width: 274px" align="left">
              <select
                name="ddlWaterSelect"
                id="ddlWaterSelect"
                style="font-family: SimHei; font-size: 11pt; width: 164px"
              >
                <option value="0">双边洗码</option>
                <option selected="selected" value="1">单边洗码</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 27px" align="right">
              押码设置类别&nbsp;
            </td>
            <td style="height: 30px; width: 274px" align="left">
              <select
                name="ddlCardSetupID"
                id="ddlCardSetupID"
                style="font-family: SimHei; font-size: 11pt; width: 164px"
              >
                <option value="0">5千台</option>
                <option value="1">1万台</option>
                <option value="2">2万台</option>
                <option selected="selected" value="5">5万台</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">币种&nbsp;</td>
            <td style="height: 30px; width: 274px" align="left">
              <input
                name="MoneySelectText"
                type="text"
                id="MoneySelectText"
                readonly="readOnly"
                style="width: 160px; font-family: SimHei"
                value="人民币"
              />
              <input
                id="MoneySelectValue"
                style="width: 10px"
                type="hidden"
                value="1"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 30px" align="right">备注&nbsp;</td>
            <td style="height: 30px; width: 274px" align="left">
              <input
                name="Remark"
                type="text"
                id="Remark"
                style="width: 160px"
              />
            </td>
          </tr>
          <tr>
            <td style="width: 128px; height: 63px"></td>
            <td style="width: 274px; height: 63px">
              <input
                type="submit"
                name="ButOk"
                value="确定"
                @click="
                  close
                "
                id="ButOk"
                style="
                  vertical-align: middle;
                  width: 74px;
                  text-align: center;
                  margin-right: 10px;
                "
              />
              <input
                name="ButCancel"
                type="button"
                id="ButCancel"
                value="取消"
                @click="
                  close
                "
                style="width: 74px; vertical-align: middle; text-align: center"
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
#popup_container.style_1 {
  font-family: Georgia, serif;
  color: #a4c6e2;
  background: #005294;
  border-color: #113f66;
}

#popup_container.style_1 #popup_title {
  color: #fff;
  font-weight: normal;
  text-align: left;
  background: #76a5cc;
  border: solid 1px #005294;
  padding-left: 1em;
}

#popup_container.style_1 #popup_content {
  background: none;
}

#popup_container.style_1 #popup_message {
  text-align: center;
}

#popup_container.style_1 INPUT[type="button"] {
  border: outset 2px #76a5cc;
  color: #a4c6e2;
  background: #3778ae;
}
</style>