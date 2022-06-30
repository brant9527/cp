<template>
  <body>
    <form method="post" action="" id="form1">
      <table width="80%" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td align="left" valign="top">
              <table width="80%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
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
              <table width="80%" border="0" cellpadding="0" cellspacing="0">
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
                      >
                        <tbody>
                          <tr>
                            <td
                              width="19%"
                              align="center"
                              valign="middle"
                              class="f4"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="5" align="right" valign="top" class="kr"></td>
                  </tr>
                </tbody>
              </table>
              <table width="80%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="1%" align="left" valign="top" class="kl"></td>
                    <td height="27" align="center">
                      <div id="div1" style="margin-top: 20px">
                        <img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                          alt=""
                        />
                        <a href=""  class="f5" @click="newGroup">新增代理商</a><img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                        /><a href=""  class="f5"
                        @click="newCard"
                          >新增会员</a
                        ><img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                        />
                        <a
                          id="lbtnShowGroup"
                          class="f5"
                          href=""
                          @click="currentUserProxy"
                          >查看当前代理商</a
                        >
                        <img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                          alt=""
                        />
                        <a
                          id="lbtnShowCard"
                          class="f5"
                          href=""
                          @click="currentUserVip"

                          >查看当前会员</a
                        >
                        <img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                          alt=""
                        />
                        <a
                          id="Lbtndncl"
                          class="f5"

                          style="
                            color: #bc0021;
                            font-weight: bold;
                            font-size: 14px;
                          "
                          title="版本：v1.0
说明：无需打开网页，本机登录代理商后台，受网络状况影响小
如有疑问，请联系客服"
                          href="javascript:__doPostBack('Lbtndncl','')"
                          >下载代理商PC版</a
                        >
                        <img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                          alt=""
                        />
                        <a
                          href="../down/qragent.html"
                          id="Lbtnan"
                          class="f5"

                          style="
                            color: #bc0021;
                            font-weight: bold;
                            font-size: 14px;
                          "
                          target="_blank"
                          title="版本：v1.0
说明：安卓体验版现已推出
如有疑问，请联系客服"
                          >下载代理app安卓版</a
                        >
                        <img
                          height="10"
                          src="https://tpy111net.com/image/dot2.gif"
                          width="10"
                          alt=""
                        />
                        <table
                          id="Grid"
                          align="center"
                          style="
                            left: 0pt;
                            width: 90%;
                            border-collapse: collapse;
                          "
                        >
                          <tbody>
                            <tr align="right">
                              <td class="lefttd">帐号:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_NameID"
                                  style="color: Red"
                                  >{{ formData.account }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">名称:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_NameStr"
                                  style="color: Red"
                                  >{{ formData.name }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">币种:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_multiple"
                                  style="color: Red"
                                  >{{ formData.currency }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">信用额度:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_CreditMoney"
                                  style="color: Red"
                                  >{{ formData.creditValue }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">剩余额度:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_RemanentMoney"
                                  style="color: Red"
                                  >{{ formData.remainValue }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">总押码:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_AllBet"
                                  style="color: Red"
                                  >{{ formData.zongyama }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">总赢:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_AllWin"
                                  style="color: Red"
                                  >{{ formData.zongying }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">洗码量:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_WaterBet"
                                  style="color: Red"
                                  >{{ formData.ximaliang }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">洗码费:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_WaterMoney"
                                  style="color: Red"
                                  >{{ formData.ximaliang }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">总金额:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_AllMoney"
                                  style="color: Red"
                                  >{{ formData.zongjiner }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">公司金额:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_corMoney"
                                  style="color: Red"
                                  >{{ formData.gongsijiner }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">洗码类别:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_WaterSelect"
                                  style="color: Red"
                                  >{{ formData.ximaleibie }}</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">洗码比:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_WaterPercent"
                                  style="color: Red"
                                  >{{ formData.ximabi }}%</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">占成:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="txt_Stock"
                                  style="color: Red"
                                  >{{ formData.zhancheng }}%</span
                                >
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">暂停:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<img
                                  src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  :style="{
                                    display: formData.zanting ? 'none' : '',
                                  }"
                                  alt=""
                                />
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">有无结算权限:</td>
                              <td class="righttd">
                                <img
                                  src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  :style="{
                                    display: formData.jiesuanquanxian
                                      ? 'none'
                                      : '',
                                  }"
                                  alt=""
                                />
                              </td>
                            </tr>
                            <tr bgcolor="#FFFFFF" align="right">
                              <td class="lefttd">上次登录:</td>
                              <td class="righttd">
                                &nbsp;&nbsp;<span
                                  id="LabelIP"
                                  style="color: Red"
                                  >{{ formData.scLogin }}</span
                                >&nbsp;&nbsp;<a
                                  href="https://px888.net/zh/agent/security.aspx"
                                  style="color: blue"
                                  >启用或关闭登录限制</a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                    <td width="1%" align="right" valign="top" class="kr"></td>
                  </tr>
                  <tr>
                    <td width="1%" align="left" valign="top" class="kl"></td>
                    <td align="center">
                      <font class="f5">限红设置:</font>
                    </td>
                    <td width="1%" align="right" valign="top" class="kr"></td>
                  </tr>
                  <tr>
                    <td width="1%" align="left" valign="top" class="kl"></td>
                    <td align="center">
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_Bjl1"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">百家乐1</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                              <th scope="col" style="width: 17%">限红</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl1_Label1_0">闲庄</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label2_0">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label3_0">30000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label6_0">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl1_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label2_1">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label3_1">3000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label6_1">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl1_Label1_2">对子</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label2_2">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label3_2">1500</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl1_Label6_2">0</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_Bjl2"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">百家乐2</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                              <th scope="col" style="width: 17%">限红</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl2_Label1_0">闲庄</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label2_0">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label3_0">50000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label6_0">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl2_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label2_1">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label3_1">5000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label6_1">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl2_Label1_2">对子</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label2_2">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label3_2">2500</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl2_Label6_2">0</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_Bjl3"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">百家乐3</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                              <th scope="col" style="width: 17%">限红</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl3_Label1_0">闲庄</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label2_0">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label3_0">30000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label6_0">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl3_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label2_1">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label3_1">3000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label6_1">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl3_Label1_2">对子</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label2_2">100</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label3_2">1500</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl3_Label6_2">0</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_Bjl4"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">百家乐4</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                              <th scope="col" style="width: 17%">限红</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl4_Label1_0">闲庄</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label2_0">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label3_0">50000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label6_0">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl4_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label2_1">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label3_1">5000</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label6_1">0</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_Bjl4_Label1_2">对子</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label2_2">200</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label3_2">2500</span>
                              </td>
                              <td>
                                <span id="GridView_Bjl4_Label6_2">0</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_lh1"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">龙虎台1</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_lh1_Label1_0">龙、虎</span>
                              </td>
                              <td>
                                <span id="GridView_lh1_Label2_0">50</span>
                              </td>
                              <td>
                                <span id="GridView_lh1_Label3_0">20000</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_lh1_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_lh1_Label2_1">50</span>
                              </td>
                              <td>
                                <span id="GridView_lh1_Label3_1">2000</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <table
                          cellspacing="1"
                          cellpadding="0"
                          rules="all"
                          id="GridView_lh2"
                          style="
                            border-width: 1px;
                            border-style: solid;
                            height: 20px;
                            width: 90%;
                            background-color: Black;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: #e8e8e8;
                                font-size: 9pt;
                                font-weight: bold;
                                height: 20px;
                              "
                            >
                              <th scope="col" style="width: 16%">龙虎台2</th>
                              <th scope="col" style="width: 16%">低注</th>
                              <th scope="col" style="width: 17%">高注</th>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_lh2_Label1_0">龙、虎</span>
                              </td>
                              <td>
                                <span id="GridView_lh2_Label2_0">50</span>
                              </td>
                              <td>
                                <span id="GridView_lh2_Label3_0">30000</span>
                              </td>
                            </tr>
                            <tr
                              align="center"
                              style="
                                color: Black;
                                background-color: White;
                                font-size: 9pt;
                                height: 20px;
                              "
                            >
                              <td>
                                <span id="GridView_lh2_Label1_1">和</span>
                              </td>
                              <td>
                                <span id="GridView_lh2_Label2_1">50</span>
                              </td>
                              <td>
                                <span id="GridView_lh2_Label3_1">3000</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                    <td width="1%" align="right" valign="top" class="kr"></td>
                  </tr>
                </tbody>
              </table>
              <table width="80%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="1%" align="left" valign="top" class="kl"></td>
                    <td align="center">
                      <font class="f5">筹码设置:</font>
                    </td>
                    <td width="1%" align="right" valign="top" class="kr"></td>
                  </tr>
                  <tr>
                    <td width="1%" align="left" valign="top" class="kl"></td>
                    <td height="27" align="center">
                      <div id="div2">
                        <div>
                          <table
                            cellspacing="1"
                            cellpadding="0"
                            rules="all"
                            id="GridSet"
                            style="
                              border-width: 1px;
                              border-style: solid;
                              height: 20px;
                              width: 90%;
                              background-color: Black;
                              font-family: Arial;
                            "
                          >
                            <tbody>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: #e8e8e8;
                                  font-size: 12px;
                                  font-weight: bold;
                                  height: 20px;
                                "
                              >
                                <th scope="col">筹码</th>
                                <th scope="col">50</th>
                                <th scope="col">100</th>
                                <th scope="col">200</th>
                                <th scope="col">500</th>
                                <th scope="col">1,000</th>
                                <th scope="col">2,000</th>
                                <th scope="col">5,000</th>
                                <th scope="col">10,000</th>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_0">百家乐 1</span>
                                </td>
                                <td><span id="GridSet_lb5_0">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb6_0"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb7_0"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb8_0">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb9_0"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb10_0"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb11_0">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb12_0"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_1">百家乐 2</span>
                                </td>
                                <td><span id="GridSet_lb5_1">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb6_1"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb7_1"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb8_1">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb9_1"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb10_1"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb11_1">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb12_1"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_2">百家乐 3</span>
                                </td>
                                <td><span id="GridSet_lb5_2">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb6_2"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb7_2"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb8_2">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb9_2"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb10_2"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb11_2">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb12_2"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_3">百家乐 4</span>
                                </td>
                                <td><span id="GridSet_lb5_3">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb6_3"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb7_3"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb8_3">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb9_3"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb10_3"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb11_3">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb12_3"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_4">龙虎台1</span>
                                </td>
                                <td>
                                  <span id="GridSet_lb5_4"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb6_4"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb7_4">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb8_4"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb9_4"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb10_4">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb11_4"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb12_4">&nbsp;</span></td>
                              </tr>
                              <tr
                                align="center"
                                style="
                                  color: Black;
                                  background-color: White;
                                  font-size: 12px;
                                  height: 20px;
                                "
                              >
                                <td>
                                  <span id="GridSet_Label1_5">龙虎台2</span>
                                </td>
                                <td>
                                  <span id="GridSet_lb5_5"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb6_5"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb7_5">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb8_5"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td>
                                  <span id="GridSet_lb9_5"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb10_5">&nbsp;</span></td>
                                <td>
                                  <span id="GridSet_lb11_5"
                                    ><img
                                      src="https://tpy111net.com/image/top_r3_c19.jpg"
                                  /></span>
                                </td>
                                <td><span id="GridSet_lb12_5">&nbsp;</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                    <td width="1%" align="right" valign="top" class="kr"></td>
                  </tr>
                </tbody>
              </table>
              <table width="80%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="1%" align="left" valign="top">
                      <img
                        src="https://tpy111net.com/image/index_r13_c6.jpg"
                        width="12"
                        height="8"
                        alt=""
                      />
                    </td>
                    <td
                      width="98%"
                      height="8"
                      background="https://tpy111net.com/image/index_r13_c11.jpg"
                    ></td>
                    <td width="1%" align="right" valign="top">
                      <img
                        src="https://tpy111net.com/image/index_r13_c15.jpg"
                        width="12"
                        height="8"
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
      formData: {},
    };
  },
  methods: {
    async getAgentInfo() {
      let { data, code, pic } = await this.$http.post("/api/data/getAgentInfo");

      this.formData = data;
    },
    newGroup(event) {
      event.preventDefault()
      var str = this.openwindow("/zh/agent/GroupAdd.aspx", "", 420, 480);
    },
    openwindow(url, name, iWidth, iHeight) {
  
      var iTop = (window.screen.height - 30 - iHeight) / 2;
      var iLeft = (window.screen.width - 10 - iWidth) / 2;
      window.open(
        url,
        name,
        "height=" +
          iHeight +
          ",innerHeight=" +
          iHeight +
          ",width=" +
          iWidth +
          ",innerWidth=" +
          iWidth +
          ",top=" +
          iTop +
          ",left=" +
          iLeft +
          ",toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no"
      );
    },
    newCard(event) {
      event.preventDefault()

      var str = this.openwindow("/zh/agent/Card/CardAdd.aspx", "", 420, 480);
    },
    currentUserProxy(event){
      event.preventDefault()
      this.$emit('changeComp','Proxy')
    },
    currentUserVip(event){
      event.preventDefault()
      this.$emit('changeComp','dqhy')
    }
  },
  mounted() {
    this.getAgentInfo();
  },
};
</script>

<style lang="scss" scoped>
#Grid {
  position: relative;
  top: 0pt;
  left: 5pt;
  font-size: 9pt;
}
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
  line-height: 8px;
  text-decoration: none;
}

.lefttd {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
  border: 1px solid black;
  background-color: #e8e8e8;
  width: 34%;
  height: 23px;
}

.righttd {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
  border: 1px solid black;
  height: 23px;
  text-align: left;
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
a:link {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
}
a:visited {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
}
a:hover {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  color: #003399;
  text-decoration: underline;
}
a.f2:link {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
a.f2:visited {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
a.f2:hover {
  font-size: 12px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #003399;
  text-decoration: underline;
}
.f4 {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}
a.f4:link {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}
a.f4:visited {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}
a.f4:hover {
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  color: #0066cc;
  text-decoration: underline;
}
.f5 {
  font-size: 13px;
  font-style: normal;
  line-height: 150%;
  color: #bc0021;
  text-decoration: none;
  font-weight: bold;
  margin:0 5px;
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
  text-decoration: none;
}
.spec {
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-color: #cccccc;
  background-repeat: repeat-x;
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
.tit {
  font-size: 12px;
  font-style: normal;
  line-height: 20px;
  color: #000000;
}
</style>