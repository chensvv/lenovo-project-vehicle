webpackJsonp([20],{tWla:function(e,t){},"zE/n":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("gRE1"),r=i.n(a),s=i("pWbq"),n=i("2hMI"),o=i("WBHA"),l={components:{countTo:i.n(o).a},data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now()-864e5;return e.getTime()>t}},list:[],perList:[],infoList:[],searchItem:{uid:"",dtp:"",uip:"",refreshTime:"",putTime:""},columns:[],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:120,show:!1,list:[]},currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,editVisible:!1,listLoading:!0,isshow:!0,bigId:1}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(r()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("asr:rawview")&&(this.isshow=!1)},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},formTime:function(e,t){var i=e.it,a=new Date(i);return a.getFullYear()+"-"+Object(s.a)(a.getMonth()+1)+"-"+Object(s.a)(a.getDate())+" "+Object(s.a)(a.getHours())+":"+Object(s.a)(a.getMinutes())},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleClose:function(){this.editVisible=!1},edithandleConfirm:function(){this.editVisible=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e),this.bigId=this.comId.id,this.getList()},handleInfo:function(e,t){var i=this,a={id:t.id};Object(n._57)(a).then(function(e){i.infoList=e,i.editVisible=!0})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,uid:this.searchItem.uid,dtp:this.searchItem.dtp,uip:this.searchItem.uip,id:this.bigId};Object(n._56)(t).then(function(t){e.listLoading=!1,e.list=t.data.data.data,e.comId=e.list.pop(),e.totalCount=t.data.data.total,e.endVal=t.data.count})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("日志管理")]),e._v(" "),e._l(e.$route.meta,function(t,a){return i("el-breadcrumb-item",{key:a},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[i("el-form-item",{attrs:{label:"UID",prop:"uid"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uid,callback:function(t){e.$set(e.searchItem,"uid","string"==typeof t?t.trim():t)},expression:"searchItem.uid"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"客户端类型",prop:"dtp"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.dtp,callback:function(t){e.$set(e.searchItem,"dtp","string"==typeof t?t.trim():t)},expression:"searchItem.dtp"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"客户端ip",prop:"uip"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uip,callback:function(t){e.$set(e.searchItem,"uip","string"==typeof t?t.trim():t)},expression:"searchItem.uip"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),i("el-form-item",{staticClass:"sub-btn"},[i("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)],1),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalCount<5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"UID",prop:"uid",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"客户端设备类型",prop:"dtp",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"客户端IP",prop:"uip",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"客户端ID",prop:"did",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"客户端版本",prop:"ver",align:"center","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"插入时间",prop:"it",align:"center",sortable:"",formatter:e.formTime,"min-width":"120"}}),e._v(" "),e.isshow?i("el-table-column",{attrs:{label:"原始日志",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{directives:[{name:"has",rawName:"v-has",value:"asr:rawview",expression:"'asr:rawview'"}],staticClass:"cur-info",attrs:{slot:""},on:{click:function(i){return e.handleInfo(t.$index,t.row)}},slot:"default"},[i("i",{staticClass:"el-icon-search icon"})])]}}],null,!1,50096994)}):e._e()],1),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"详情",visible:e.editVisible,width:"300","before-close":e.handleClose},on:{"update:visible":function(t){e.editVisible=t}}},[e._v("\n      "+e._s(e.infoList)+"\n      "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.edithandleConfirm()}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(e){i("tWla")},"data-v-bdf4b618",null);t.default=u.exports}});