<template>
  <body>
    <form id="myForm">
      
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
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td width="5" align="left" valign="top" class="kl"></td>
            <td
              align="center"
              style="
                height: 27px;
               
              "
              class="div-kl"
            >
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="19%" align="left" valign="middle" class="f5">
                      每日明细帐
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
              <div id="div1">
                <div>
                  <table
                    cellspacing="1"
                    cellpadding="1"
                    rules="all"
                    id="grivGroup"
                    style="
                      border-width: 0px;
                      background-color: Black;
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
                          font-size: 10pt;
                          font-weight: bold;
                          height: 20px;
                        "
                      >
                        <th scope="col">日期</th>
                        <th scope="col">帐号</th>
                        <th scope="col">名称</th>
                        <th scope="col">总押码</th>
                        <th scope="col">总赢</th>
                        <th scope="col">洗码设置</th>
                        <th scope="col">洗码量</th>
                        <th scope="col">洗码费</th>
                        <th scope="col">总金额</th>
                        <th scope="col">占成</th>
                        <th scope="col">公司金额</th>
                      </tr>
                      <tr
                        align="center"
                        onmouseover="c=this.style.backgroundColor;this.style.backgroundColor='#8EC26F'"
                        onmouseout="this.style.backgroundColor=c"
                        style="
                          background-color: white;
                          font-size: 11px;
                          height: 25px;
                          
                        "
                        v-for="item in form"
                        :key="item.key"
                      >
                        <td>
                          <span id="grivGroup_Label11_0">{{item.date}}</span>
                        </td>
                        <td>
                          <span id="grivGroup_Label111_0">{{item.account}}</span>
                        </td>
                        <td>
                          <span id="grivGroup_Label12_0">{{item.name}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label161_0">{{item.zongyama}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label17_0">{{item.zongying}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label20_0">{{item.ximashezhi}}%</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label40_0">{{item.ximaliang}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label22_0">{{item.ximafei}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label10_0">{{item.zongjiner}}</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label7_0">{{item.zhancheng}}%</span>
                        </td>
                        <td align="right">
                          <span id="grivGroup_Label1111_0">{{item.gongsijiner}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            <td style="width: 12px; height: 8px" align="right" valign="top">
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
    </form>
  </body>
</template>

<script>
export default {
  data() {
    return {
      form: [],
      account: window.localStorage.getItem("account"),
      currentAccount: "",
    };
  },
  computed: {},
  props: {
    dataInfo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    isSameAccount(item) {

      return (item.account = this.account);
    },
    async getInfo() {
      let { dataList, code, pic } = await this.$http.post(
        "/api/data/getMrmxz",
        { account: this.currentAccount }
      );

      this.form = dataList;
    },
    nextLevel(item) {
      this.$emit("nextLevel", item);
    },
    current(item) {
      this.$emit("current", item);
    },
  },
  mounted() {
    console.log(this.dataInfo);
    this.currentAccount = this.dataInfo.account;
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>

 #Grid {position:relative;top:0pt;left:5pt;font-size:9pt;}
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	SCROLLBAR-ARROW-COLOR:#FFFFFF;
    SCROLLBAR-FACE-COLOR:#0099CC;
    SCROLLBAR-DARKSHADOW-COLOR:#FFFFFF;
    SCROLLBAR-HIGHLIGHT-COLOR:#00CCFF;
    SCROLLBAR-3DLIGHT-COLOR:#006699;
    SCROLLBAR-SHADOW-COLOR:#006699;
    SCROLLBAR-TRACK-COLOR:#FFFFFF;
	}


td {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	line-height: 0px;
	text-decoration: none;
}
.show {
	filter: DropShadow(Color=#ffffff, OffX=1, OffY=1, Positive=ture);
}.k1 {
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
	color: #FFFFFF;
	text-decoration: none;
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
.over{
background-color: #0066CC;
color: #fff;
}
.f4 {
	font-size: 14px;
	font-style: normal;
	line-height: 150%;
	color: #0066CC;
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
	text-decoration: underline;
    }    
.K9 {
	background-color: #FFFFFF;
	border: 1px solid #010133;
	width: 150px;
}
.K10 {
	background-color: #FFFFFF;
	border: 1px solid #010133;
	width: 155px;
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

th.colalt {
border-left: 1px solid #C1DAD7;
border-top: 0;
background: #f5fafa url(http://tpy111net.com/bullet2.gif) no-repeat;
font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica,
sans-serif;
color: #B4AA9D;
}
.menu_title {
	COLOR: #333333; background-color: #ffffff; 
}

.menu_title2 {
	COLOR: #000000; background-color: #3399FF; 
}
.div-kl{
   background-image: url(http://tpy111net.com/index_r4_c8.jpg);
}


</style>