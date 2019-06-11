webpackJsonp([15],{DqgI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("D7x1"),s=(a("4/BI"),{name:"applicationlist",components:{iTable:n.a},data:function(){var e=this;return{list:[],addList:{classnames:"",mobile_num:"",kuoz:""},searchItem:{classnames:"",mobile_num:"",kuoz:""},columns:[{prop:"index",label:"序号",align:"center",width:100,hasSort:!0},{prop:"classnames",label:"名称",align:"center",hasSort:!0},{prop:"mobile_num",label:"电话号码",align:"center",hasSort:!0},{prop:"kuoz",label:"扩展",align:"center",hasSort:!0}],options:{stripe:!1,loading:!0,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:120,show:!1,list:[{id:"1",label:"删除",type:"danger",show:!0,plain:!1,disabled:!1,method:function(t,a){e.handleDel(t,a)}}]},addRules:{classnames:[{required:!0,message:"请输入名称",trigger:"blur"}],mobile_num:[{required:!0,message:"请输入电话号码",trigger:"blur"}],kuoz:[{required:!0,message:"请输入扩展",trigger:"blur"}]},addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields()},onSubmit:function(){console.log(this.searchItem)},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e)},handleDel:function(e,t){var a=this;console.log(t.id),console.log(e),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.list.splice(e,1)}).catch(function(){console.log("no")})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log(t.addList),t.addVisible=!1})},getList:function(){var e=this;this.$http.get("/api/data").then(function(t){e.list=t.data,t.data.forEach(function(t){t.index=t.id%e.pageSize,0==t.index&&(t.index=e.pageSize)}),e.totalCount=e.list.length,e.options.loading=!1})}}}),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("数据管理")]),e._v(" "),e._l(e.$route.meta,function(t,n){return a("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"名称",prop:"classnames"}},[a("el-input",{model:{value:e.searchItem.classnames,callback:function(t){e.$set(e.searchItem,"classnames",t)},expression:"searchItem.classnames"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile_num"}},[a("el-input",{model:{value:e.searchItem.mobile_num,callback:function(t){e.$set(e.searchItem,"mobile_num",t)},expression:"searchItem.mobile_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"扩展",prop:"kuoz"}},[a("el-input",{model:{value:e.searchItem.kuoz,callback:function(t){e.$set(e.searchItem,"kuoz",t)},expression:"searchItem.kuoz"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("i-table",{attrs:{list:e.list.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),options:e.options,columns:e.columns,operates:e.operates}}),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"名称",prop:"classnames"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.classnames,callback:function(t){e.$set(e.addList,"classnames",t)},expression:"addList.classnames"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile_num"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.mobile_num,callback:function(t){e.$set(e.addList,"mobile_num",t)},expression:"addList.mobile_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"扩展",prop:"kuoz"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.kuoz,callback:function(t){e.$set(e.addList,"kuoz",t)},expression:"addList.kuoz"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(e){a("VECI")},"data-v-3bb37802",null);t.default=l.exports},VECI:function(e,t){}});
//# sourceMappingURL=15.f8fad0699b874f669445.js.map