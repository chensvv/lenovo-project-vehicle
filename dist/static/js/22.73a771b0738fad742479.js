webpackJsonp([22],{"8fqe":function(e,t){},MwPh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("2hMI"),n={name:"applicationlist",data:function(){return{list:[],addList:{name:"",tel:"",exts:""},searchItem:{name:"",tel:"",exts:""},addRules:{name:[{required:!0,message:"请输入名称",trigger:"change"}],tel:[{required:!0,message:"请输入电话号码",trigger:"change"}],exts:[{required:!0,message:"请输入扩展",trigger:"change"}]},addVisible:!1,currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleDel:function(e,t){var a=this,n={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.k)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={name:this.addList.name,exts:this.addList.exts,tels:this.addList.tel};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(s.j)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addBtnLoading=!1,t.addVisible=!1):(t.addBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,name:this.searchItem.name,exts:this.searchItem.exts,tel:this.searchItem.tel};Object(s.l)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,s){return a("el-breadcrumb-item",{key:s},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name",t)},expression:"searchItem.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"tel"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.tel,callback:function(t){e.$set(e.searchItem,"tel",t)},expression:"searchItem.tel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"扩展",prop:"exts"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.exts,callback:function(t){e.$set(e.searchItem,"exts",t)},expression:"searchItem.exts"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:11,expression:"11"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"电话",prop:"tels",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"扩展",prop:"exts",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:111,expression:"111"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.name,callback:function(t){e.$set(e.addList,"name",t)},expression:"addList.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"tel"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.tel,callback:function(t){e.$set(e.addList,"tel",t)},expression:"addList.tel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"扩展",prop:"exts"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.exts,callback:function(t){e.$set(e.addList,"exts",t)},expression:"addList.exts"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("8fqe")},"data-v-4857f80c",null);t.default=r.exports}});