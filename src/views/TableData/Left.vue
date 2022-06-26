<template>
  <body style="width:249px">
    <form
      method="post"
 
      id="myForm"
    >
      

      <table width="224" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width: 201px; line-height:0px;">
              <img src="http://tpy111net.com/new_bg_r2_c2.jpg" width="224" height="17" />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="220"
        border="0"
        cellpadding="0"
        cellspacing="0"
        background="http://tpy111net.com/new_bg_r4_c2.jpg"
      >
        <tbody>
          <tr>
            <td height="550" align="left" valign="top">
              <div>
                <table border="0" cellpadding="5" cellspacing="1">
                  <tbody>
                    <tr>
                      <th colspan="2" align="left">
                        <span
                          style="
                            font-size: 9pt;
                            color: #bc0021;
                            font-family: 宋体;
                          "
                          >【单日报表查询】</span
                        >
                      </th>
                    </tr>
                    <tr>
                      <td style="width: 189px" align="right">日期:</td>
                      <td style="width: 137px">
                        <select
                          name="txtDate0"
                          id="txtDate0"
                          style="width: 110px"
                     
                          v-model="singleDate"
                        >
                         
                          <option :selected="singleDate==index" :value="item" v-for="(item,index) in options" :key="item">{{item}}</option>
                          
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 189px"></td>
                      <td>
                        <input
                          @click="singleSearch"
                          name="Button1"
                          type="button"
                          id="Button1"
                          value="搜索"
                          style="width: 60px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" align="left">
                        <span
                          style="
                            font-size: 9pt;
                            color: #bc0021;
                            font-family: 宋体;
                          "
                          >【多日报表查询】</span
                        >
                      </th>
                    </tr>
                    <tr>
                      <td style="width: 189px" align="right">起始日期:</td>
                      <td align="left">
                        <select
                          name="txtDate1"
                          id="txtDate1"
                          style="width: 110px"
                          v-model="beginDate"

                        >
                        
                          <option :value="item" v-for="item in options" :key="item">{{item}}</option>
                          
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 189px" align="right">截止日期:</td>
                      <td align="left">
                        <select
                          name="txtDate2"
                          id="txtDate2"
                          style="width: 110px"
                          v-model="endDate"

                        >
                          
                          <option :value="item" v-for="item in options" :key="item">{{item}}</option>
                          
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 189px"></td>
                      <td>
                        <font size="2">
                          <input
                           @click="mulDateSearch"
                            name="Button2"
                            type="button"
                            id="Button2"
                            value="搜索"
                            style="width: 60px"
                          />
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table width="224" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td>
              <img src="http://tpy111net.com/new_bg_r6_c2.jpg" width="224" height="17" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>

  
  </body>
</template>

<script>
import Event from '@/Common/Event.js'
export default {
  data() {
    return {
      dayTime: 1000*3600*24,
      options: [],
      singleDate:0,
      beginDate:0,
      endDate:0,
    }
  },
  methods: {
    getDate() {
      let nowDate = new Date().getTime()
      for (let index = 1; index < 32; index++) {
        const currentTime = nowDate -index*this.dayTime;
        let year = new Date(currentTime).getFullYear()
        let month = new Date(currentTime).getMonth()+1
        let day = new Date(currentTime).getDate()
        this.options.push(`${year}-${month}-${day}`)
      }
      this.beginDate =this.endDate=  this.singleDate = this.options[0]

    },
    singleSearch(e){
      e.preventDefault();
      Event.$emit('dateSelect',{
        type:'Single',
        beginDate:this.singleDate
      })
    },
    mulDateSearch(e){
      e.preventDefault();
      Event.$emit('dateSelect',{
        type:'Mul',
        beginDate:this.beginDate,
        endDate:this.endDate
      })
    }
    
  },
  created () {
    this.getDate();
  },
};
</script>

<style lang="scss" scoped>
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
td {
	font-size: 12px;
	font-style: normal;
	line-height: 150%;

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
</style>