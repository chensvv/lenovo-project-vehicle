webpackJsonp([57],{"+YY7":function(e,t){},etgG:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("gRE1"),i=s.n(o),a=(s("pWbq"),s("2hMI")),n={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now()-864e5;return e.getTime()>t}},list:[],perList:[],totalClass:"",searchItem:{userId:"",domain:"",asrres:"",respstatus:"",refreshTime:"",putTime:""},column:{prop:"",order:""},infoList:[],infoVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(i()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("outer:detail")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,s=t.clientWidth,o=t.scrollWidth;this.showTitle=!(s<o)},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleInfo:function(e,t){var s=this;this.infoVisible=!0;var o={id:t.id};Object(a._75)(o).then(function(e){s.infoList=e.data})},infoHandleConfirm:function(){this.infoVisible=!1},infoHandleClose:function(){this.infoVisible=!1},sortChange:function(e){this.column={prop:e.prop,order:e.order},console.log(this.column),this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,userId:this.searchItem.userId,asrres:this.searchItem.asrres,domain:this.searchItem.domain,respstatus:this.searchItem.respstatus,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,fieldName:this.column.prop,order:"ascending"==this.column.order?"0":""};Object(a._76)(t).then(function(t){e.listLoading=!1,200==t.data.code&&(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length)}).catch(function(){e.listLoading=!1})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table height-105"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:"/outer/list"}}},[e._v("技能管理")]),e._v(" "),s("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),s("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[s("div",{staticClass:"form-input height70"},[s("el-form-item",{attrs:{label:"用户ID",prop:"userId"}},[s("el-input",{attrs:{clearable:""},model:{value:e.searchItem.userId,callback:function(t){e.$set(e.searchItem,"userId","string"==typeof t?t.trim():t)},expression:"searchItem.userId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户指令",prop:"asrres"}},[s("el-input",{attrs:{clearable:""},model:{value:e.searchItem.asrres,callback:function(t){e.$set(e.searchItem,"asrres","string"==typeof t?t.trim():t)},expression:"searchItem.asrres"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"解析领域",prop:"domain"}},[s("el-input",{attrs:{clearable:""},model:{value:e.searchItem.domain,callback:function(t){e.$set(e.searchItem,"domain","string"==typeof t?t.trim():t)},expression:"searchItem.domain"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"响应状态",prop:"respstatus"}},[s("el-input",{attrs:{clearable:""},model:{value:e.searchItem.respstatus,callback:function(t){e.$set(e.searchItem,"respstatus","string"==typeof t?t.trim():t)},expression:"searchItem.respstatus"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1)],1),e._v(" "),s("div",{staticClass:"form-btn"},[s("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),s("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)]),e._v(" "),s("div",{staticClass:"table-box"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list},on:{"sort-change":e.sortChange}},[s("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),s("el-table-column",{attrs:{label:"用户ID",prop:"uid",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.uid,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.uid)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.uid)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"用户指令",prop:"userText",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.userText,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.userText)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.userText)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"解析领域",prop:"nlpDomain",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.nlpDomain,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.nlpDomain)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.nlpDomain)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"响应状态",prop:"responseStatus",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.responseStatus,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.responseStatus)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.responseStatus)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"三方名称",prop:"outerType",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.outerType,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.outerType)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.outerType)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"接口名称",prop:"interfaceUrl",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.interfaceUrl,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.interfaceUrl)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.interfaceUrl)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"时间",prop:"displayTime",align:"center","min-width":"120"}}),e._v(" "),e.isshow?s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"has",rawName:"v-has",value:"outer:detail",expression:"'outer:detail'"}],attrs:{size:"mini"},on:{click:function(s){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")])]}}],null,!1,1902092414)}):e._e()],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),s("el-dialog",{attrs:{title:"详情",visible:e.infoVisible,width:"40%",top:"10vh","before-close":e.infoHandleClose},on:{"update:visible":function(t){e.infoVisible=t}}},[s("el-form",{attrs:{"label-position":"right",size:"small","label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户ID"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.uid,callback:function(t){e.$set(e.infoList,"uid",t)},expression:"infoList.uid"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"设备类型"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.dtp,callback:function(t){e.$set(e.infoList,"dtp",t)},expression:"infoList.dtp"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"会话ID"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.ixid,callback:function(t){e.$set(e.infoList,"ixid",t)},expression:"infoList.ixid"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"来源类型"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.sourceType,callback:function(t){e.$set(e.infoList,"sourceType",t)},expression:"infoList.sourceType"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"请求内容"}},[s("el-input",{attrs:{type:"textarea","auto-complete":"off",readonly:""},model:{value:e.infoList.content,callback:function(t){e.$set(e.infoList,"content",t)},expression:"infoList.content"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"响应头部信息"}},[s("el-input",{attrs:{type:"textarea","auto-complete":"off",readonly:""},model:{value:e.infoList.responseHeader,callback:function(t){e.$set(e.infoList,"responseHeader",t)},expression:"infoList.responseHeader"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"响应内容"}},[s("el-input",{attrs:{type:"textarea","auto-complete":"off",readonly:""},model:{value:e.infoList.responseContent,callback:function(t){e.$set(e.infoList,"responseContent",t)},expression:"infoList.responseContent"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"请求消耗时间"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.costTime,callback:function(t){e.$set(e.infoList,"costTime",t)},expression:"infoList.costTime"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"接口名称"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.interfaceName,callback:function(t){e.$set(e.infoList,"interfaceName",t)},expression:"infoList.interfaceName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"接口路径"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.interfaceUrl,callback:function(t){e.$set(e.infoList,"interfaceUrl",t)},expression:"infoList.interfaceUrl"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"响应状态"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.responseStatus,callback:function(t){e.$set(e.infoList,"responseStatus",t)},expression:"infoList.responseStatus"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"错误信息"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.errorMsg,callback:function(t){e.$set(e.infoList,"errorMsg",t)},expression:"infoList.errorMsg"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"三方名称"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.outerType,callback:function(t){e.$set(e.infoList,"outerType",t)},expression:"infoList.outerType"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"入库时间"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.displayTime,callback:function(t){e.$set(e.infoList,"displayTime",t)},expression:"infoList.displayTime"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"解析领域"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.nlpDomain,callback:function(t){e.$set(e.infoList,"nlpDomain",t)},expression:"infoList.nlpDomain"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户指令"}},[s("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:e.infoList.userText,callback:function(t){e.$set(e.infoList,"userText",t)},expression:"infoList.userText"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.infoHandleConfirm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(n,l,!1,function(e){s("+YY7")},"data-v-36de3a34",null);t.default=r.exports}});