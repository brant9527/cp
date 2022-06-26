<template>
  <body>
    <form
    
      id="myForm"
    >

      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width: 12px; height: 12px" align="left" valign="top">
              <img
                src="http://tpy111net.com/index_r2_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="http://tpy111net.com/index_r2_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 12px" align="right" valign="top">
              <img
                src="http://tpy111net.com/index_r2_c15.jpg"
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
        style="margin-top: -3px"
      >
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td
              height="27"
              align="center"
              style="background-image: url(http://tpy111net.com/index_r4_c8.jpg)"
            >
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td align="left" valign="middle" class="f5">
                      &nbsp; 代理商资料
                    </td>
                    <td align="right" valign="middle">
                      <a
                        onclick="refresh()"
                        style="color: blue; cursor: pointer; display: none"
                      >
                        <img
                          id="imgshuaxin"
                          src="http://tpy111net.com/shuaxin.png"
                          style="width: 11pt"
                          alt="刷新"
                        />
                      </a>
                    </td>
                    <td style="width: 50px">
                      <a
                        onclick="refresh()"
                        style="
                          color: blue;
                          cursor: pointer;
                          font-size: 9pt;
                          display: none;
                        "
                        >刷新&nbsp;&nbsp;&nbsp;&nbsp;
                      </a>
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
            <td height="27" valign="top">
              <input
                name="GameDate1"
                type="hidden"
                id="GameDate1"
                style="width: 48px"
              />
              <input
                name="GameDate2"
                type="hidden"
                id="GameDate2"
                style="width: 48px"
              />
              <div id="div1">
                <center>
                  <div>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      rules="all"
                      id="grivGroup"
                      style="
                        border-color: Black;
                        border-width: 1px;
                        border-style: Solid;
                        font-family: Arial;
                        width: 98%;
                        border-collapse: collapse;
                      "
                    >
                      <tbody>
                        <tr
                          align="center"
                          style="
                            color: White;
                            background-color: Gray;
                            border-color: Black;
                            border-width: 1px;
                            border-style: Solid;
                            font-weight: bold;
                            height: 24px;
                          "
                        >
                          <th scope="col">代理帐号</th>
                          <th scope="col">代理名称</th>
                          <th scope="col">信用额度</th>
                          <th scope="col">剩余额度</th>
                          <th scope="col">总押码</th>
                          <th scope="col">总赢</th>
                          <th scope="col">洗码设置</th>
                          <th scope="col">洗码量</th>
                          <th scope="col">洗码费</th>
                          <th scope="col">占成</th>
                          <th scope="col">暂停</th>
                          <th scope="col">锁定</th>
                          <th scope="col">功能</th>
                        </tr>
                        <tr
                          align="center"
                          onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#3399FF'"
                          onmouseout="this.style.backgroundColor=c"
                          style="
                            background-color: white;
                            border-color: black;
                            border-width: 1px;
                            border-style: solid;
                            height: 27px;
                          "
                          v-for="item in form"
                          :key="item.key"
                        >
                          <td>
                            <span id="grivGroup_LabelName_0">{{item.account}}</span>
                          </td>
                          <td>
                            <span id="grivGroup_Label2_0">{{item.name}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label10_0">{{item.creditValue}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label11_0">{{item.remainValue}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label4_0">{{item.zongyama}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label05_0">{{item.zongying}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label20_0">{{item.ximaleibie+' '+item.ximabi}}%</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label40_0">{{item.ximaliang}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label22_0">{{item.ximafei}}</span>
                          </td>
                          <td align="right">
                            <span id="grivGroup_Label7_0">{{item.zhancheng}}%</span>
                          </td>
                          <td>
                            <span id="grivGroup_Label21_0">{{item.zanting}}</span>
                          </td>
                          <td>
                            <span id="grivGroup_Label23_0"></span>
                          </td>
                          <td>
                            <table width="100%">
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      id="grivGroup_LinkButton2_0"
                                     
                                      @click="nextLevel(item)"
                                      >下级代理</a
                                    >
                                    &nbsp;
                                  </td>
                                  <td>
                                    <a
                                      id="grivGroup_LinkButton1_0"

                                      @click="currentVip(item)"

                                      >当前会员</a
                                    >&nbsp;
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      onclick='javascript:myMenu("874164")'
                                      style="color: Red; display: block"
                                      >操作</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </center>
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
                src="http://tpy111net.com/index_r13_c6.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
            <td>
              <img
                src="http://tpy111net.com/index_r13_c11.jpg"
                width="100%"
                height="12px"
                alt=""
              />
            </td>
            <td style="width: 12px; height: 12px" align="right" valign="top">
              <img
                src="http://tpy111net.com/index_r13_c15.jpg"
                width="12px"
                height="12px"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div id="groupmenu" class="white_content3">
        <table align="center">
          <tbody>
            <tr>
              <td style="width: 280px; height: 30px">
                <input
                  id="Name"
                  readonly="readonly"
                  style="
                    font-size: larger;
                    width: 227px;
                    border-top-style: none;
                    border-right-style: none;
                    border-left-style: none;
                    border-bottom: black thin solid;
                    text-align: center;
                    color: #bc0021;
                  "
                  type="text"
                  value="A"
                />
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="groupname()">更改名称</a>
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="grouppoint()">更改额度</a>
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="groupsetup()"
                  >更改押码设置</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="groupwater()"
                  >更改洗码设置</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="groupstock()"
                  >更改代理商占成</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="grouplock()"
                  >更改状态(锁定、暂停)</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="javascript:void(0)" onclick="grouppassword()"
                  >修改密码</a
                >
              </td>
            </tr>
      
          </tbody>
        </table>
        <table align="center">
          <tbody>
            <tr>
              <td style="width: 280px; height: 30px">
                <a href="#" onclick="closememu()">关闭</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="groupname" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td>名称:</td>
              <td style="width: 168px">
                <input
                  name="txtNameValue"
                  type="text"
                  id="txtNameValue"
                  onpaste="return false"
                  onkeydown="if(event.keyCode==13){event.keyCode=0;return   false}"
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnName"
                  value="确定"
                  id="btnName"
                />
                &nbsp;
                <input
                  id="bb01"
                  type="button"
                  value="取消"
                  onclick="closename()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="grouppoint" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td>信用额度:</td>
              <td style="width: 168px">
                <input
                  name="txtPointValue"
                  type="text"
                  id="txtPointValue"
                  onkeydown="isnum()"
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnPoint"
                  value="确定"
                  id="btnPoint"
                />
                &nbsp;
                <input
                  id="bb02"
                  type="button"
                  value="取消"
                  onclick="closepoint()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="groupwater" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td>洗码比:</td>
              <td>
                <input
                  name="txtWaterValue"
                  type="text"
                  id="txtWaterValue"
                  style="width: 55px"
                  value="0"
                  onkeydown="if(event.keyCode==13){event.keyCode=0;return   false}"
                />%
              </td>
              <td>洗码类别:</td>
              <td>
                <select
                  name="selectedWaterValue"
                  id="selectedWaterValue"
                  style="width: 101px"
                >
                  <option selected="selected" value="1">单边洗码</option>
                  <option value="0">双边洗码</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="4" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnWater"
                  value="确定"
                  id="btnWater"
                />
                &nbsp;
                <input
                  id="bb03"
                  type="button"
                  value="取消"
                  onclick="closewater()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="groupstock" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td style="font-size: medium">占成:</td>
              <td style="width: 168px">
                <input
                  name="txtStockValue"
                  type="text"
                  id="txtStockValue"
                  onkeydown="if(event.keyCode==13){event.keyCode=0;return   false}"
                />
              </td>
              <td>%</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnStock"
                  value="确定"
                  id="btnStock"
                />
                &nbsp;
                <input
                  id="bb04"
                  type="button"
                  value="取消"
                  onclick="closestock()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="grouplock" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <table id="radioLock" style="font-size: 13px">
                  <tbody>
                    <tr>
                      <td>
                        <input
                          id="radioLock_0"
                          type="radio"
                          name="radioLock"
                          value="1"
                          checked="checked"
                        /><label for="radioLock_0">暂停</label>
                      </td>
                      <td>
                        <input
                          id="radioLock_1"
                          type="radio"
                          name="radioLock"
                          value="0"
                        /><label for="radioLock_1">解除暂停</label>
                      </td>
                      <td>
                        <input
                          id="radioLock_2"
                          type="radio"
                          name="radioLock"
                          value="3"
                        /><label for="radioLock_2">锁定</label>
                      </td>
                      <td>
                        <input
                          id="radioLock_3"
                          type="radio"
                          name="radioLock"
                          value="2"
                        /><label for="radioLock_3">解除锁定</label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnLockEdit"
                  value="确定"
                  id="btnLockEdit"
                />
                &nbsp;
                <input
                  id="bb05"
                  type="button"
                  value="取消"
                  onclick="closelock()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="grouppassword" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td align="center">输入新密码</td>
              <td align="center">
                <input
                  name="txtPasswordValue"
                  type="text"
                  id="txtPasswordValue"
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnPassword"
                  value="确定"
                  onclick="return chkpwd();"
                  id="btnPassword"
                />
                &nbsp;
                <input
                  id="bb06"
                  type="button"
                  value="取消"
                  onclick="closepassword()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="groupclear" class="white_content">
        <table align="center">
          <tbody>
            <tr>
              <td align="right">结算的代理号：</td>
              <td style="width: 168px">
                <span id="txtGroupValue"></span>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                &nbsp;<input
                  type="submit"
                  name="btnClear"
                  value="确定"
                  id="btnClear"
                />
                &nbsp;
                <input
                  id="bb07"
                  type="button"
                  value="取消"
                  onclick="closeclear()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="fade" class="black_overlay"></div>
      <input type="hidden" id="crd" name="crd" />
    </form>

   
  </body>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      form:[]
    };
  },

  methods: {
    async getInfo() {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getAgentList",
        {  account: this.account }
      );

      this.form = dataList;
    },
    nextLevel(item){
        this.account = item.account
        this.getInfo()
    },
    currentVip(item){
      event.preventDefault()
      this.$emit('changeComp',
      
      {
        type:'dqhy',
        dataTemp:{account:item.account}
      })
    }
  },
  mounted() {
    this.account = localStorage.getItem('account')
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
  a{
    text-decoration: underline;
        color: -webkit-link;
    cursor: pointer;
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
        .black_overlay {
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 1001;
    -moz-opacity: .8;
    opacity: .8;
    filter: alpha(opacity=88);
    opacity: .5
}

.white_content {
    display: none;
    position: fixed;
    top: 20%;
    left: 30%;
    width: 25%;
    height: 25%;
    padding: 5px;
    border: 2px solid orange;
    z-index: 1002;
    overflow: auto;
    background-color: #fff;
    background-image: url(http://tpy111net.com/bg_top.jpg);
    background-repeat: repeat-x;
    margin: 0;
    font-size: 12px;
    font-style: normal;
    line-height: 15px;
    text-decoration: none;
    color: #333;
    text-align: center
}

.b1 {
    background-color: #fff;
    background-image: url(http://tpy111net.com/bg_top.jpg);
    background-repeat: repeat-x;
    margin: 0;
    font-size: 12px;
    font-style: normal;
    line-height: 15px;
    text-decoration: none;
    color: #333
}

.white_content2 {
    display: none;
    position: fixed;
    top: 20%;
    left: 30%;
    width: 50%;
    height: 55%;
    padding: 5px;
    border: 2px solid orange;
    z-index: 1002;
    overflow: auto;
    background-color: #fff;
    background-image: url(http://tpy111net.com/bg_top.jpg);
    background-repeat: repeat-x;
    margin: 0;
    font-size: 12px;
    font-style: normal;
    line-height: 15px;
    text-decoration: none;
    color: #333;
    text-align: center
}

.white_content3 {
    display: none;
    position: fixed;
    top: 20%;
    left: 30%;
    width: 30%;
    height: 50%;
    padding: 5px;
    border: 2px solid orange;
    z-index: 1002;
    overflow: auto;
    background-color: #fff;
    background-image: url(http://tpy111net.com/bg_top.jpg);
    background-repeat: repeat-x;
    margin: 0;
    font-size: 15px;
    font-style: normal;
    line-height: 15px;
    text-decoration: none;
    color: #333;
    text-align: center
}

body {
    position: relative
}
body{background-color:#fff;background-image:url(http://tpy111net.com/bg_top.jpg);background-repeat:repeat-x;margin:0;font-size:12px;font-style:normal;line-height:15px;text-decoration:none;color:#333}.kl{background-image:url(http://tpy111net.com/index_r4_c6.jpg);background-repeat:repeat-y;background-position:left top}.kr{background-image:url(http://tpy111net.com/index_r4_c16.jpg);background-repeat:repeat-y;background-position:right top}.spec{font-size:12px;line-height:18px;font-weight:700;color:#fff;text-decoration:none;background-image:url(http://tpy111net.com/index_r10_c13.jpg);background-repeat:repeat-x}.f5{font-size:13px;font-style:normal;line-height:150%;color:#bc0021;text-decoration:none;font-weight:700}a.f5:link{font-size:14px;font-style:normal;line-height:150%;color:#bc0021;text-decoration:none;font-weight:700}a.f5:visited{font-size:14px;font-style:normal;line-height:150%;color:#bc0021;text-decoration:none;font-weight:700}a.f5:hover{font-size:14px;font-style:normal;line-height:150%;font-weight:700;color:#bc0021;text-decoration:underline}.menu_title{color:#333;background-color:#fff}.menu_title2{color:#000;background-color:#39f}
    
</style>