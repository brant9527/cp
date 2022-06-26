<template>
  <body >
    <form method="post" action="/zh/agent/security.aspx" id="myForm">
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATE"
          id="__VIEWSTATE"
          value="/wEPDwUKLTE3MjA4NTQyOQ9kFgICAw9kFgQCAQ8PFgIeBFRleHQFCjIwLjI0LiouMTRkZAIDDw8WAh8ABRvnvo7lm71NaWNyb3NvZnTmlbDmja7kuK3lv4NkZGRAkkOG25IbK+KVXm6JFfp7jwb/qEQ6v4F0qm3O4l87Kg=="
        />
      </div>
      <div class="aspNetHidden">
        <input
          type="hidden"
          name="__VIEWSTATEGENERATOR"
          id="__VIEWSTATEGENERATOR"
          value="0B8AFF71"
        />
      </div>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width: 12px; height: 12px" align="left" valign="top">
              <img
                src="http://tpy111net.com/image/index_r2_c6.jpg"
                width="12px"
                height="12px"
              />
            </td>
            <td
              style="
                background-image: url(http://tpy111net.com/image/index_r2_c11.jpg);
              "
            >
              &nbsp;
            </td>
            <td style="width: 12px; height: 12px" align="right" valign="top">
              <img
                src="http://tpy111net.com/image/index_r2_c15.jpg"
                width="12px"
                height="12px"
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
            <td
              height="27"
              align="center"
              background="http://tpy111net.com/image/index_r4_c8.jpg"
            >
              <table width="98%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="19%" align="left" valign="middle" class="f5">
                      安全中心 —— 登录详情&nbsp;
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
              <table style="width: 780px; text-align: left">
                <tbody>
                  <tr>
                    <td style="width: 200px; height: 25px">上次登录</td>
                    <td></td>
                    <td style="width: 200px; color: red">
                      <span id="lbip">20.24.*.14</span>
                    </td>
                    <td style="width: 50px">&nbsp;</td>
                    <td style="width: 300px; text-align: left">
                      <span style="color: red"
                        >默认开启登录限制,全空保存一次关闭限制</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 200px; height: 25px">对应地址</td>
                    <td></td>
                    <td style="width: 200px; color: red">
                      <span id="lbaddrip">美国Microsoft数据中心</span>
                    </td>
                    <td style="width: 50px">&nbsp;</td>
                    <td style="width: 300px; text-align: left">
                      <span style="color: red"
                        >保存地址启用登录限制，清空所有地址关闭登录限制</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 200px; height: 25px">常用地址</td>
                    <td style="width: 50px"></td>
                    <td style="width: 200px; color: red">
                      <span id="Labelset" style="font-weight: bold"
                        >未设置</span
                      >
                    </td>
                    <td style="width: 50px">&nbsp;</td>
                    <td style="width: 300px; text-align: left">
                      <a
                        id="asetaddr"
                        href="javascript:void(0)"
                        onclick="setaddr(this)"
                        style="color: blue; text-decoration: none"
                        >点此设置</a
                      >&nbsp;&nbsp;&nbsp;&nbsp;常用地址以外地区登录受限
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <table
                style="width: 800px; display: none; text-align: left"
                id="tbcydz"
              >
                <tbody>
                  <tr>
                    <td style="width: 200px; height: 25px">
                      &nbsp;选择常用登录地址一
                    </td>
                    <td style="width: 50px"></td>
                    <td style="width: 200px">
                      <div id="city_1">
                        <select id="pro1" name="pro1" class="prov">
                          <option value="">未选择</option>
                          <option value="北京">北京</option>
                          <option value="天津">天津</option>
                          <option value="河北">河北</option>
                          <option value="山西">山西</option>
                          <option value="内蒙古">内蒙古</option>
                          <option value="辽宁">辽宁</option>
                          <option value="吉林">吉林</option>
                          <option value="黑龙江">黑龙江</option>
                          <option value="上海">上海</option>
                          <option value="江苏">江苏</option>
                          <option value="浙江">浙江</option>
                          <option value="安徽">安徽</option>
                          <option value="福建">福建</option>
                          <option value="江西">江西</option>
                          <option value="山东">山东</option>
                          <option value="河南">河南</option>
                          <option value="湖北">湖北</option>
                          <option value="湖南">湖南</option>
                          <option value="广东">广东</option>
                          <option value="广西">广西</option>
                          <option value="海南">海南</option>
                          <option value="重庆">重庆</option>
                          <option value="四川">四川</option>
                          <option value="贵州">贵州</option>
                          <option value="云南">云南</option>
                          <option value="西藏">西藏</option>
                          <option value="陕西">陕西</option>
                          <option value="甘肃">甘肃</option>
                          <option value="青海">青海</option>
                          <option value="宁夏">宁夏</option>
                          <option value="新疆">新疆</option>
                          <option value="香港">香港</option>
                          <option value="澳门">澳门</option>
                          <option value="台湾">台湾</option>
                          <option value="中国">中国</option>
                          <option value="老挝">老挝</option>
                          <option value="越南">越南</option>
                          <option value="菲律宾">菲律宾</option>
                          <option value="泰国">泰国</option>
                          <option value="日本">日本</option>
                          <option value="韩国">韩国</option>
                          <option value="缅甸">缅甸</option>
                        </select>
                        <select
                          id="city1"
                          name="city1"
                          class="city"
                          disabled="disabled"
                        ></select>
                      </div>
                    </td>
                    <td style="width: 50px; color: red">* 可选</td>
                    <td style="width: 300px; color: blue">
                      如果常用地址不足3个，剩下的可不选
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 200px; height: 25px">
                      &nbsp;选择常用登录地址二
                    </td>
                    <td></td>
                    <td>
                      <div id="city_2">
                        <select id="pro2" name="pro2" class="prov">
                          <option value="">未选择</option>
                          <option value="北京">北京</option>
                          <option value="天津">天津</option>
                          <option value="河北">河北</option>
                          <option value="山西">山西</option>
                          <option value="内蒙古">内蒙古</option>
                          <option value="辽宁">辽宁</option>
                          <option value="吉林">吉林</option>
                          <option value="黑龙江">黑龙江</option>
                          <option value="上海">上海</option>
                          <option value="江苏">江苏</option>
                          <option value="浙江">浙江</option>
                          <option value="安徽">安徽</option>
                          <option value="福建">福建</option>
                          <option value="江西">江西</option>
                          <option value="山东">山东</option>
                          <option value="河南">河南</option>
                          <option value="湖北">湖北</option>
                          <option value="湖南">湖南</option>
                          <option value="广东">广东</option>
                          <option value="广西">广西</option>
                          <option value="海南">海南</option>
                          <option value="重庆">重庆</option>
                          <option value="四川">四川</option>
                          <option value="贵州">贵州</option>
                          <option value="云南">云南</option>
                          <option value="西藏">西藏</option>
                          <option value="陕西">陕西</option>
                          <option value="甘肃">甘肃</option>
                          <option value="青海">青海</option>
                          <option value="宁夏">宁夏</option>
                          <option value="新疆">新疆</option>
                          <option value="香港">香港</option>
                          <option value="澳门">澳门</option>
                          <option value="台湾">台湾</option>
                          <option value="中国">中国</option>
                          <option value="老挝">老挝</option>
                          <option value="越南">越南</option>
                          <option value="菲律宾">菲律宾</option>
                          <option value="泰国">泰国</option>
                          <option value="日本">日本</option>
                          <option value="韩国">韩国</option>
                          <option value="缅甸">缅甸</option>
                        </select>
                        <select
                          id="city2"
                          name="city2"
                          class="city"
                          disabled="disabled"
                        ></select>
                      </div>
                    </td>
                    <td style="width: 50px; color: red">* 可选</td>
                    <td style="color: blue">
                      出行时修改常用登录地址，以防无法在外地登录
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 200px; height: 25px">
                      &nbsp;选择常用登录地址三
                    </td>
                    <td></td>
                    <td>
                      <div id="city_3">
                        <select id="pro3" name="pro3" class="prov">
                          <option value="">未选择</option>
                          <option value="北京">北京</option>
                          <option value="天津">天津</option>
                          <option value="河北">河北</option>
                          <option value="山西">山西</option>
                          <option value="内蒙古">内蒙古</option>
                          <option value="辽宁">辽宁</option>
                          <option value="吉林">吉林</option>
                          <option value="黑龙江">黑龙江</option>
                          <option value="上海">上海</option>
                          <option value="江苏">江苏</option>
                          <option value="浙江">浙江</option>
                          <option value="安徽">安徽</option>
                          <option value="福建">福建</option>
                          <option value="江西">江西</option>
                          <option value="山东">山东</option>
                          <option value="河南">河南</option>
                          <option value="湖北">湖北</option>
                          <option value="湖南">湖南</option>
                          <option value="广东">广东</option>
                          <option value="广西">广西</option>
                          <option value="海南">海南</option>
                          <option value="重庆">重庆</option>
                          <option value="四川">四川</option>
                          <option value="贵州">贵州</option>
                          <option value="云南">云南</option>
                          <option value="西藏">西藏</option>
                          <option value="陕西">陕西</option>
                          <option value="甘肃">甘肃</option>
                          <option value="青海">青海</option>
                          <option value="宁夏">宁夏</option>
                          <option value="新疆">新疆</option>
                          <option value="香港">香港</option>
                          <option value="澳门">澳门</option>
                          <option value="台湾">台湾</option>
                          <option value="中国">中国</option>
                          <option value="老挝">老挝</option>
                          <option value="越南">越南</option>
                          <option value="菲律宾">菲律宾</option>
                          <option value="泰国">泰国</option>
                          <option value="日本">日本</option>
                          <option value="韩国">韩国</option>
                          <option value="缅甸">缅甸</option>
                        </select>
                        <select
                          id="city3"
                          name="city3"
                          class="city"
                          disabled="disabled"
                        ></select>
                      </div>
                    </td>
                    <td style="width: 50px; color: red">* 可选</td>
                    <td style="color: blue">
                      选择“未选择”选项保存，即可清空该地址
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td
                      colspan="3"
                      style="text-align: center; color: red; font-size: 10pt"
                    >
                      &nbsp; <span id="lbtext"></span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align: right">
                      <input
                        type="submit"
                        name="btnsave"
                        value="保存常用地址"
                        id="btnsave"
                        class="button gray"
                        style="font-family: STZhongsong; width: 141px"
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="submit"
                        name="btndel"
                        value="关闭登录限制"
                        id="btndel"
                        class="button gray"
                        style="font-family: STZhongsong; width: 141px"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="1%" align="right" valign="top" class="kr"></td>
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
            <td style="width: 12px; height: 8px" align="left" valign="top">
              <img
                src="http://tpy111net.com/image/index_r13_c6.jpg"
                width="12px"
                height="8px"
              />
            </td>
            <td>
              <img
                src="http://tpy111net.com/image/index_r13_c11.jpg"
                width="100%"
                height="8px"
              />
            </td>
            <td style="width: 12px; height: 8px" align="right" valign="top">
              <img
                src="http://tpy111net.com/image/index_r13_c15.jpg"
                width="12px"
                height="8px"
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
/* #Grid {
            position: relative;
            top: 0pt;
            left: 5pt;
            font;
            font-size: 9pt;
        } */

body {
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  scrollbar-arrow-color: #ffffff;
  scrollbar-face-color: #0099cc;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-highlight-color: #00ccff;
  scrollbar-3dlight-color: #006699;
  scrollbar-shadow-color: #006699;
  scrollbar-track-color: #ffffff;
}

td {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
}

.show {
  filter: DropShadow(Color=#ffffff, OffX=1, OffY=1, Positive=ture);
}

.k1 {
  border-right-width: 1px;
  border-bottom-width: 2px;
  border-left-width: 1px;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-color: #010134;
  border-bottom-color: #010134;
  border-left-color: #010134;
}

.f2 {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

.f3 {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.f4 {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
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

.K9 {
  background-color: #ffffff;
  border: 1px solid #010133;
  width: 150px;
}

.K10 {
  background-color: #ffffff;
  border: 1px solid #010133;
  width: 155px;
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

th.colalt {
  border-left: 1px solid #c1dad7;
  border-top: 0;
  background: #f5fafa url(http://tpy111net.com/image/bullet2.gif) no-repeat;
  font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  color: #b4aa9d;
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