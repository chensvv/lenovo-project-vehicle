webpackJsonp([41],{OhCL:function(e,t){},"zE/n":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("D7x1"),r=a("pWbq"),s=a("2hMI"),n=a("WBHA"),l=a.n(n),o={name:"applicationlist",components:{iTable:i.a,countTo:l.a},data:function(){return{list:[],infoList:[],searchItem:{uid:"",dtp:"",uip:"",refreshTime:"",putTime:""},columns:[],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:120,show:!1,list:[]},currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,fileBtnLoading:!1,editVisible:!1,startVal:0,endVal:0}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},formTime:function(e,t){var a=e.it,i=new Date(a);return i.getFullYear()+"-"+Object(r.a)(i.getMonth()+1)+"-"+Object(r.a)(i.getDate())+" "+Object(r.a)(i.getHours())+":"+Object(r.a)(i.getMinutes())+":"+Object(r.a)(i.getSeconds())},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleClose:function(){this.editVisible=!1},edithandleConfirm:function(){this.editVisible=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleInfo:function(e,t){var a=this,i={id:t.id};Object(s._11)(i).then(function(e){a.infoList=e,a.editVisible=!0})},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,uid:this.searchItem.uid,dtp:this.searchItem.dtp,uip:this.searchItem.uip};Object(s._10)(t).then(function(t){e.list=t.data.data.data,e.totalCount=t.data.data.total,e.endVal=t.data.count})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("div",{staticClass:"a_alert"},[a("i",{staticClass:"el-icon-info"}),e._v(" "),a("span",{staticClass:"alert_main"},[e._v("原始日志今天更新了"),a("countTo",{attrs:{startVal:e.startVal,endVal:e.endVal,duration:3e3}}),e._v(" 条")],1)]),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"UID",prop:"uid"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uid,callback:function(t){e.$set(e.searchItem,"uid","string"==typeof t?t.trim():t)},expression:"searchItem.uid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户端类型",prop:"dtp"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.dtp,callback:function(t){e.$set(e.searchItem,"dtp","string"==typeof t?t.trim():t)},expression:"searchItem.dtp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户端ip",prop:"uip"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uip,callback:function(t){e.$set(e.searchItem,"uip","string"==typeof t?t.trim():t)},expression:"searchItem.uip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"UID",prop:"uid",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端设备类型",prop:"dtp",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端IP",prop:"uip",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端ID",prop:"did",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端版本",prop:"ver",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"插入时间",prop:"it",align:"center",sortable:"",formatter:e.formTime}}),e._v(" "),a("el-table-column",{attrs:{label:"原始日志",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"has",rawName:"v-has",value:193,expression:"193"}],staticClass:"cur-info",attrs:{slot:""},on:{click:function(a){return e.handleInfo(t.$index,t.row)}},slot:"default"},[a("i",{staticClass:"el-icon-search icon"})])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"详情",visible:e.editVisible,width:"300","before-close":e.handleClose},on:{"update:visible":function(t){e.editVisible=t}}},[e._v("\n      "+e._s(e.infoList)+"\n      "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.edithandleConfirm()}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(o,c,!1,function(e){a("OhCL")},"data-v-0d116c6d",null);t.default=u.exports}});