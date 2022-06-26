<template>
  <body style="margin-top: 5px">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td style="width: 12px; height: 12px" align="left" valign="top">
            <img
              src="http://tpy111net.com/image/index_r2_c6.jpg"
              width="12px"
              height="12px"
              alt=""
            />
          </td>
          <td>
            <img
              src="http://tpy111net.com/image/index_r2_c11.jpg"
              width="100%"
              height="12px"
              alt=""
            />
          </td>
          <td style="width: 12px; height: 12px" align="right" valign="top">
            <img
              src="http://tpy111net.com/image/index_r2_c15.jpg"
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
      style="margin-top: -2px"
    >
      <tbody>
        <tr>
          <td
            width="5"
            align="left"
            valign="top"
            class="kl"
            style="height: 35px"
          ></td>
          <td
            align="center"
            class="div-kl"
          >
            <table width="99%" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td
                    align="left"
                    valign="middle"
                    style="height: 14px"
                    class="f5"
                  >
                    &nbsp; 会员资料
                  </td>
                  <td align="right" valign="middle">
                    <a @click="refresh()" style="color: blue; cursor: pointer">
                      <img
                        id="imgshuaxin"
                        src="http://tpy111net.com/image/shuaxin.png"
                        style="width: 11pt"
                        alt="刷新"
                      />
                    </a>
                  </td>
                  <td style="width: 50px">
                    <a
                      @click="refresh()"
                      style="color: blue; cursor: pointer; font-size: 9pt"
                      >刷新&nbsp;&nbsp;
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            width="5"
            align="right"
            valign="top"
            class="kr"
            style="height: 35px"
          ></td>
        </tr>
      </tbody>
    </table>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td style="width: 5px" align="left" valign="top" class="kl"></td>
          <td height="27">
            <form
              method="post"
              action="./Card.aspx?ti=2022%2f6%2f22+0%3a57%3a15"
              id="form55"
            >
              <div id="div1" align="center">
                <div>
                  <table
                    cellspacing="1"
                    cellpadding="1"
                    rules="all"
                    id="grivCard"
                    style="
                      border-color: Black;
                      border-width: 1px;
                      border-style: Solid;
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
                          border-color: Black;
                          border-width: 1px;
                          border-style: Solid;
                          font-weight: bold;
                          height: 24px;
                        "
                      >
                        <th scope="col">帐号</th>
                        <th scope="col">名称</th>
                        <th scope="col">信用额度</th>
                        <th scope="col">剩余额度</th>
                        <th scope="col">总赢</th>
                        <th scope="col">洗码量</th>
                        <th scope="col">洗码费</th>
                        <th scope="col">洗码类型</th>
                        <th scope="col">暂停</th>
                        <th scope="col">锁定</th>
                        <th scope="col">在线</th>
                        <th scope="col">创建日期</th>
                        <th scope="col">IP地址</th>
                        <th scope="col">功能</th>
                        <th scope="col">押码明细</th>
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
                          <span id="grivCard_Label11_0">{{item.account}}</span>
                        </td>
                        <td>
                          <span id="grivCard_Label12_0">{{item.name}}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label19_0">{{item.creditValue}}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label18_0">{{item.remainValue}}</span>
                        </td>
                        <td align="right" :class="item.zongying<0?'lose':''">
                          <span id="grivCard_Label17_0">{{item.zongying}}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label160_0">{{item.ximaliang}}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label16_0">{{item.ximafei}}</span>
                        </td>
                        <td align="right">
                          <span id="grivCard_Label20_0">{{item.ximaleibie+' '+item.ximabi}}%</span>
                        </td>
                        <td>
                          <span id="grivCard_Label21_0">{{item.zanting}}</span>
                        </td>
                        <td>
                          <span id="grivCard_Label23_0">{{item.suoding}}</span>
                        </td>
                        <td>
                          <span id="grivCard_Label24_0">{{item.zaixian}}</span>
                        </td>
                        <td>
                          <span id="grivCard_Label25_0">{{item.date}}</span>
                        </td>
                        <td>
                          <span id="grivCard_Label26_0">{{item.scLogin}}</span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >锁定 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >暂停 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >洗/补点 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >名称 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >密码 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >洗码设置 </a
                          >&nbsp;
                          <a
                            href="javascript:void(0)"
                            onclick=""
                            style="
                              font-size: 11pt;
                              text-decoration: none;
                              font-family: SimHei;
                            "
                            >筹码设置 </a
                          >&nbsp;
                          <a
                            onclick=""
                            id="grivCard_LinkButton2_0"
                            href="#"
                            style="
                              color: LimeGreen;
                              font-family: SimHei;
                              font-size: 11pt;
                              text-decoration: none;
                            "
                            >结算 </a
                          >&nbsp;
                          <a
                            onclick="javascript:return confirm('确认删除该会员？');"
                            id="grivCard_lbnDelCard_0"
                            href="javascript:__doPostBack('grivCard$ctl02$lbnDelCard','')"
                            style="
                              color: Blue;
                              font-family: SimHei;
                              font-size: 11pt;
                              text-decoration: none;
                            "
                            >清卡
                          </a>
                        </td>
                        <td>
                          <a
                            id="grivCard_LinkButton1_0"
                            href="#"
                            style="
                              color: Red;
                              font-family: SimHei;
                              font-size: 11pt;
                              text-decoration: none;
                            "
                            @click="ymmx(item)"
                            >押码明细
                          </a>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
              
            </form>
          </td>
          <td width="15" align="right" valign="top" class="kr"></td>
        </tr>
      </tbody>
    </table>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td style="width: 12px; height: 12px" align="left" valign="top">
            <img
              src="http://tpy111net.com/image/index_r13_c6.jpg"
              width="12px"
              height="12px"
              alt=""
            />
          </td>
          <td>
            <img
              src="http://tpy111net.com/image/index_r13_c11.jpg"
              width="100%"
              height="12px"
              alt=""
            />
          </td>
          <td style="width: 12px; height: 12px" align="right" valign="top">
            <img
              src="http://tpy111net.com/image/index_r13_c15.jpg"
              width="12px"
              height="12px"
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script>
export default {
  name:'dqhy',
  data() {
    return {
      account: '',
      form:[]
    };
  },
  props: {
    dataTemp: {
      type: Object,
      default: ()=>{}
    },
  },
  methods: {
    async getInfo() {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getMemberInfo",
        {  account: this.account }
      );

      this.form = dataList;
    },
    nextLevel(item){
        this.account = item.account
        this.getInfo()
    },
    refresh(){
      this.getInfo()
    },
    ymmx(item){
      this.$emit('changeComp',{type:'BetDetail',dataTemp:{account:item.account}})
    }
  },
  mounted() {
    this.account = this.dataTemp.account||localStorage.getItem('account')
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheet.scss";
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

a:hover {
  color: white;
  text-decoration: underline;
}
.div-kl{
            height: 35px; 
            background-image: url(http://tpy111net.com/image/index_r4_c8.jpg)

}
.lose{
  color:White;background-color:Red;
}
</style>