webpackJsonp([42],{PTbr:function(t,e){},aV5e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gRE1"),s=a.n(i),l=(a("pWbq"),a("2hMI")),n=a("WBHA"),o=a.n(n),r=a("FT/c"),c={components:{countTo:o.a},data:function(){return{list:[],perList:[],totalClass:"",searchItem:{dtp:"",uip:"",app:"",desc:""},columns:[],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:120,show:!1,list:[]},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!1,isshow:!0,startVal:0,endVal:0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(s()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("asr:log:download")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,i=e.scrollWidth;this.showTitle=!(a<i)},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleInfo:function(t,e){var a=r.a.proURL+"/lasf-mgr/asr/log/download?id="+e.id;window.open(a)},getList:function(){var t=this;this.listLoading=!0;var e={pgstr:this.currentPage,pcstr:this.pageSize,dtp:this.searchItem.dtp,uip:this.searchItem.uip,app:this.searchItem.app,desc:this.searchItem.desc};Object(l._92)(e).then(function(e){t.listLoading=!1,200==e.data.code&&(t.list=e.data.data.data,t.totalCount=e.data.data.total,t.endVal=e.data.count,t.totalClass=e.data.data.data.length)}).catch(function(){t.listLoading=!1})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-105"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("日志管理")]),t._v(" "),t._l(t.$route.meta,function(e,i){return a("el-breadcrumb-item",{key:i},[t._v(t._s(e))])})],2),t._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"客户端设备类型",prop:"dtp"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.dtp,callback:function(e){t.$set(t.searchItem,"dtp","string"==typeof e?e.trim():e)},expression:"searchItem.dtp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"客户端IP",prop:"uip"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.uip,callback:function(e){t.$set(t.searchItem,"uip","string"==typeof e?e.trim():e)},expression:"searchItem.uip"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"开发者ID",prop:"app"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.app,callback:function(e){t.$set(t.searchItem,"app","string"==typeof e?e.trim():e)},expression:"searchItem.app"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"识别文本",prop:"desc"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.desc,callback:function(e){t.$set(t.searchItem,"desc","string"==typeof e?e.trim():e)},expression:"searchItem.desc"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")])],1)]),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="5"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{type:"index",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"客户端设备类型",prop:"dtp",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"版本",prop:"ver",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"客户端ip",prop:"uip",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"客户端设备ID",prop:"did",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"开发者ID",prop:"dev",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"应用ID",prop:"zhi",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"设备文本",prop:"tai",align:"left","show-overflow-tooltip":!0}}),t._v(" "),t.isshow?a("el-table-column",{attrs:{label:"音频文件",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"has",rawName:"v-has",value:"asr:log:download",expression:"'asr:log:download'"}],staticClass:"cur-info",attrs:{slot:""},on:{click:function(a){return t.handleInfo(e.$index,e.row)}},slot:"default"},[a("i",{staticClass:"el-icon-folder-opened icon"})])]}}],null,!1,186505666)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(c,p,!1,function(t){a("PTbr")},"data-v-6c3aea08",null);e.default=u.exports}});