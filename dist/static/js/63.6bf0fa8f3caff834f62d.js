webpackJsonp([63],{NCEc:function(t,e){},"zE/n":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("gRE1"),a=i.n(s),o=i("pWbq"),n=i("2hMI"),r=i("WBHA"),l={components:{countTo:i.n(r).a},data:function(){return{pickerOptions:{disabledDate:function(t){var e=Date.now()-864e5;return t.getTime()>e}},list:[],perList:[],infoList:[],totalClass:"",searchItem:{uid:"",dtp:"",uip:"",refreshTime:"",putTime:""},column:{prop:"",order:""},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,editVisible:!1,listLoading:!0,isshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(a()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("asr:rawview")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,i=e.clientWidth,s=e.scrollWidth;this.showTitle=!(i<s)},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},formTime:function(t,e){var i=t.it,s=new Date(i);return s.getFullYear()+"-"+Object(o.a)(s.getMonth()+1)+"-"+Object(o.a)(s.getDate())+" "+Object(o.a)(s.getHours())+":"+Object(o.a)(s.getMinutes())},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleClose:function(){this.editVisible=!1},edithandleConfirm:function(){this.editVisible=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleInfo:function(t,e){var i=this,s={id:e.id};Object(n._85)(s).then(function(t){i.infoList=t,i.editVisible=!0})},sortChange:function(t){this.column={prop:t.prop,order:t.order},console.log(this.column),this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,uid:this.searchItem.uid,dtp:this.searchItem.dtp,uip:this.searchItem.uip,fieldName:this.column.prop,order:"ascending"==this.column.order?"0":""};Object(n._84)(e).then(function(e){t.listLoading=!1,200==e.data.code&&(t.list=e.data.data.data,t.totalCount=e.data.data.total,t.totalClass=e.data.data.data.length)}).catch(function(){t.listLoading=!1})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table height-105"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/asr/log/client"}}},[t._v("日志管理")]),t._v(" "),i("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[i("div",{staticClass:"form-input height70"},[i("el-form-item",{attrs:{label:"UID",prop:"uid"}},[i("el-input",{attrs:{clearable:""},model:{value:t.searchItem.uid,callback:function(e){t.$set(t.searchItem,"uid","string"==typeof e?e.trim():e)},expression:"searchItem.uid"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"客户端类型",prop:"dtp"}},[i("el-input",{attrs:{clearable:""},model:{value:t.searchItem.dtp,callback:function(e){t.$set(t.searchItem,"dtp","string"==typeof e?e.trim():e)},expression:"searchItem.dtp"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"客户端IP",prop:"uip"}},[i("el-input",{attrs:{clearable:""},model:{value:t.searchItem.uip,callback:function(e){t.$set(t.searchItem,"uip","string"==typeof e?e.trim():e)},expression:"searchItem.uip"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:t.searchItem.refreshTime,callback:function(e){t.$set(t.searchItem,"refreshTime",e)},expression:"searchItem.refreshTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:t.searchItem.putTime,callback:function(e){t.$set(t.searchItem,"putTime",e)},expression:"searchItem.putTime"}})],1)],1),t._v(" "),i("div",{staticClass:"form-btn"},[i("el-button",{attrs:{size:"mini",type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")])],1)]),t._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list},on:{"sort-change":t.sortChange}},[i("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),i("el-table-column",{attrs:{label:"UID",prop:"uid",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.uid,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.uid)+"\n                ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.uid)+"\n            ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"客户端设备类型",prop:"dtp",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.dtp,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.dtp)+"\n                ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.dtp)+"\n            ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"客户端IP",prop:"uip",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.uip,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.uip)+"\n                ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.uip)+"\n            ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"客户端ID",prop:"did",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.did,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.did)+"\n                ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.did)+"\n            ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"客户端版本",prop:"ver",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.ver,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.ver)+"\n                ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                "+t._s(e.row.ver)+"\n            ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"插入时间",prop:"it",align:"center",formatter:t.formTime,"min-width":"120"}}),t._v(" "),t.isshow?i("el-table-column",{attrs:{label:"原始日志",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{directives:[{name:"has",rawName:"v-has",value:"asr:rawview",expression:"'asr:rawview'"}],staticClass:"cur-info",attrs:{slot:""},on:{click:function(i){return t.handleInfo(e.$index,e.row)}},slot:"default"},[i("i",{staticClass:"el-icon-search icon"})])]}}],null,!1,50096994)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),i("el-dialog",{staticClass:"log-info",attrs:{title:"详情",visible:t.editVisible,width:"40%",top:"10vh","before-close":t.handleClose},on:{"update:visible":function(e){t.editVisible=e}}},[i("pre",[t._v(t._s(t.infoList))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.edithandleConfirm()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("NCEc")},"data-v-2b2ed25e",null);e.default=u.exports}});