webpackJsonp([17],{aV5e:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("D7x1"),n=(a("pWbq"),a("2hMI")),s=a("WBHA"),l=a.n(s),i={name:"applicationlist",components:{iTable:r.a,countTo:l.a},data:function(){return{list:[],searchItem:{dtp:"",uip:"",app:"",desc:""},columns:[],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:120,show:!1,list:[]},currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,fileBtnLoading:!1,startVal:0,endVal:0}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleInfo:function(e,t){var a=t.ixid+".raw",r=document.createElement("a");r.href=t.rfp,r.download=a,r.click()},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,dtp:this.searchItem.dtp,uip:this.searchItem.uip,app:this.searchItem.app,desc:this.searchItem.desc};Object(n._18)(t).then(function(t){e.list=t.data.data.data,e.totalCount=t.data.data.total,e.endVal=t.data.count})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("div",{staticClass:"a_alert"},[a("i",{staticClass:"el-icon-info"}),e._v(" "),a("span",{staticClass:"alert_main"},[e._v("原始音频今天更新了"),a("countTo",{attrs:{startVal:e.startVal,endVal:e.endVal,duration:3e3}}),e._v(" 条")],1)]),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"客户端设备类型",prop:"dtp"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.dtp,callback:function(t){e.$set(e.searchItem,"dtp","string"==typeof t?t.trim():t)},expression:"searchItem.dtp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户端IP",prop:"uip"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uip,callback:function(t){e.$set(e.searchItem,"uip","string"==typeof t?t.trim():t)},expression:"searchItem.uip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开发者ID",prop:"app"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.app,callback:function(t){e.$set(e.searchItem,"app","string"==typeof t?t.trim():t)},expression:"searchItem.app"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"识别文本",prop:"desc"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.desc,callback:function(t){e.$set(e.searchItem,"desc","string"==typeof t?t.trim():t)},expression:"searchItem.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端设备类型",prop:"dtp",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"版本",prop:"ver",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端ip",prop:"uip",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"客户端设备ID",prop:"did",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"开发者ID",prop:"dev",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"应用ID",prop:"zhi",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"设备文本",prop:"tai",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"音频文件",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"has",rawName:"v-has",value:196,expression:"196"}],staticClass:"cur-info",attrs:{slot:""},on:{click:function(a){return e.handleInfo(t.$index,t.row)}},slot:"default"},[a("i",{staticClass:"el-icon-folder-opened icon"})])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(e){a("h9vC")},"data-v-6a253ceb",null);t.default=c.exports},h9vC:function(e,t){}});